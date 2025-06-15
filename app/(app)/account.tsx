import { Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { supabase } from "@/lib/supabase";
import { useRouter } from "expo-router";
import { useTheme } from "@/hooks/useTheme";

const Account: React.FC = () => {
    const router = useRouter();
    const theme = useTheme();

    const handleSignOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (!error) {
            router.replace("/signIn");
        } else {
            console.error("Error signing out:", error.message);
        }
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
            <Button title="Sign Out" onPress={handleSignOut} color={theme.primary} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Account;