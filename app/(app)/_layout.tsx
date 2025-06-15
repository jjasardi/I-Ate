import { ThemeProvider } from "@/context/ThemeContext";
import { Stack, useRouter } from "expo-router";
import { useTheme } from "@/hooks/useTheme";
import { AuthContext } from "@/context/AuthContext";
import { useContext, useEffect } from "react";
import AccountButton from "@/components/AccountButton";

function LayoutContent() {
  const theme = useTheme();
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    if (!loading && !user) {
      router.replace("/signIn");
    }
  }, [loading, user, router]);

  if (loading) {
    return null; // TODO: Add loading screen
  }

  const headerAccountRight = () => (
    <AccountButton onPress={() => router.navigate("/account")} />
  );

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.background },
        headerTintColor: theme.text
      }}
    >
      <Stack.Screen name="index" options={{
        headerTitle: "I-Ate",
        headerRight: headerAccountRight
      }} />
      <Stack.Screen name="addFoodItem" />
      <Stack.Screen name="account" />
    </Stack>
  );
}

export default function AppLayout() {
  return (
    <ThemeProvider>
      <LayoutContent />
    </ThemeProvider>
  );
}