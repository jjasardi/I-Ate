import { ThemeProvider } from "@/context/ThemeContext";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "@/hooks/useTheme";

function LayoutContent() {
  const theme = useTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.background },
        headerTintColor: theme.text,
      }}
    >
      <Stack.Screen name="index" options={{ headerTitle: "I-Ate" }} />
      <Stack.Screen name="addFoodItem" />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <LayoutContent />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}