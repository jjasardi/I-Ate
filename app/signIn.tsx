import { supabase } from "@/lib/supabase";
import { useState, useEffect, useContext } from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { AuthContext } from "@/context/AuthContext";

const SignIn: React.FC = () => {
  const theme = useTheme();
  const router = useRouter();
  const { user } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      router.replace('/');
    }
  }, [user, router])

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <TextInput
        style={[styles.input, { color: theme.text }]}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, { color: theme.text }]}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error ? <Text style={[styles.error, { color: theme.error }]}>{error}</Text> : null}
      <Button color={theme.primary} title="Sign In" onPress={handleSignIn} />
      <View style={styles.registerContainer}>
        <Text style={[styles.text, { color: theme.text }]}>Don't have an account?</Text>
        <Button color={theme.secondary} title="Register" onPress={() => router.replace("/register")} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  error: {
    marginBottom: 12,
  },
  registerContainer: {
    marginTop: 16,
    alignItems: "center",
  },
  text: {
    marginBottom: 8,
  },
});

export default SignIn;