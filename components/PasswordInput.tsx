import { useTheme } from "@/hooks/useTheme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import { TextInputProps, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";

type PasswordInputProps = TextInputProps & {
    value: string;
    onChangeText: (text: string) => void;
};

const PasswordInput: React.FC<PasswordInputProps> = ({ value, onChangeText, ...props }) => {
    const theme = useTheme();
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View
            style={[
                styles.container, {
                    borderColor: theme.primary,
                    backgroundColor: theme.cardBackground,
                },
            ]
            }
        >
            <TextInput
                style={[styles.input, { color: theme.text }]}
                placeholder="Password"
                placeholderTextColor={theme.text + "99"}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                autoCorrect={false}
                {...props}
            />
            <TouchableOpacity
                onPress={() => setShowPassword((v) => !v)}
                style={styles.eyeButton}
            >
                <MaterialCommunityIcons
                    name={showPassword ? "eye-off" : "eye"}
                    size={24}
                    color={theme.text}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 16,
        height: 44,
        paddingHorizontal: 12,
    },
    input: {
        flex: 1,
        fontSize: 16,
    },
    eyeButton: {
        padding: 8,
        marginLeft: 4,
    },
});

export default PasswordInput;