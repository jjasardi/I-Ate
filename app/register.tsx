import { supabase } from "@/lib/supabase";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const Register: React.FC = () => {
  const theme = useTheme();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      setSuccess("Registration successful! Please check your email to confirm.");
    }
  };

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
      {success ? <Text style={[styles.success, { color: theme.primary }]}>{success}</Text> : null}
      <Button color={theme.primary} title="Register" onPress={handleRegister} />
      <Button
        color={theme.secondary}
        title="Back to Sign In"
        onPress={() => router.replace("/signIn")}
      />
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
  success: {
    marginBottom: 12,
  },
});

export default Register;