import { supabase } from "@/lib/supabase";
import { useState, useEffect, useContext } from "react";
import { Button, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { AuthContext } from "@/context/AuthContext";
import PasswordInput from "@/components/PasswordInput";
import CustomTextInput from "@/components/CustomTextInput";

const SignIn: React.FC = () => {
  const theme = useTheme();
  const router = useRouter();
  const { user, loading } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async () => {
    setError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      router.replace('/');
    }
  }, [user, router]);

  return (
    <SafeAreaView style={[styles.mainContainer, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.primary }]}>Sign In</Text>
      <CustomTextInput
        placeholder="Email"
        onChangeText={setEmail}
        keyboardType="email-address"
        editable={!loading}
      />
      <PasswordInput
        value={password}
        onChangeText={setPassword}
        editable={!loading}
      />

      {error ? <Text style={[styles.error, { color: theme.error }]}>{error}</Text> : null}

      <View style={styles.buttonContainer}>
        <Button
          color={theme.primary}
          title={loading ? "Signing In..." : "Sign In"}
          onPress={handleSignIn}
          disabled={!email || !password || loading}
        />
        {loading && <ActivityIndicator color={theme.primary} style={{ marginTop: 12 }} />}
      </View>

      <View style={styles.registerContainer}>
        <Text style={[styles.text, { color: theme.text }]}>Don't have an account?</Text>
        <Button color={theme.secondary} title="Register" onPress={() => router.replace("/register")} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 32,
    alignSelf: "center",
  },
  error: {
    marginBottom: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonContainer: {
    marginBottom: 24,
  },
  registerContainer: {
    marginTop: 16,
    alignItems: "center",
  },
  text: {
    marginBottom: 8,
    fontSize: 16,
  },
});

export default SignIn;