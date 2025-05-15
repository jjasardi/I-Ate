import { ThemeProvider } from "@/context/ThemeContext";
import { Stack, useRouter } from "expo-router";
import { useTheme } from "@/hooks/useTheme";
import { AuthContext } from "@/context/AuthContext";
import { useContext, useEffect } from "react";

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


  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.background },
        headerTintColor: theme.text
      }}
    >
      <Stack.Screen name="index" options={{ headerTitle: "I-Ate" }} />
      <Stack.Screen name="addFoodItem" />
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