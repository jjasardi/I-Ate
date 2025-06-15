import React from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";
import { useTheme } from "@/hooks/useTheme";

const CustomTextInput: React.FC<TextInputProps> = (props) => {
    const theme = useTheme();
    return (
        <TextInput
            {...props}
            style={[
                styles.input,
                { color: theme.text, borderColor: theme.primary, backgroundColor: theme.cardBackground },
                props.style,
            ]}
            placeholderTextColor={theme.text + "99"}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 44,
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 16,
        paddingHorizontal: 12,
        fontSize: 16,
    },
});

export default CustomTextInput;