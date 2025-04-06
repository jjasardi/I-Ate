import FloatingActionButton from "@/components/FloatingActionButton";
import { useTheme } from "@/hooks/useTheme";
import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Index: React.FC = () => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <FloatingActionButton onPress={() => router.navigate('/addFoodItem')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})

export default Index;
