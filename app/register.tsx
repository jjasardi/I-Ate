import { supabase } from "@/lib/supabase";
import { useContext, useState } from "react";
import { ActivityIndicator, Button, StyleSheet, Text, View } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import PasswordInput from "@/components/PasswordInput";
import { AuthContext } from "@/context/AuthContext";
import CustomTextInput from "@/components/CustomTextInput";

const Register: React.FC = () => {
  const theme = useTheme();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { loading } = useContext(AuthContext)

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
    <SafeAreaView style={[styles.mainContainer, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.primary }]}>Register</Text>

      <CustomTextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <PasswordInput value={password} onChangeText={setPassword} />
      {error ? <Text style={[styles.error, { color: theme.error }]}>{error}</Text> : null}
      {success ? <Text style={[styles.success, { color: theme.primary }]}>{success}</Text> : null}
      <View style={styles.buttonContainer}>
        <Button color={theme.primary} title={loading ? "Registering..." : "Register"} onPress={handleRegister} disabled={!email || !password || loading} />
        {loading && <ActivityIndicator color={theme.primary} style={{ marginTop: 12 }} />}
      </View>
      <View style={styles.registerContainer}>
        <Text style={[styles.text, { color: theme.text }]}>Already have an account?</Text>
        <Button color={theme.secondary} title="Back to Sign In" onPress={() => router.replace("/signIn")} />
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
  success: {
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

export default Register;