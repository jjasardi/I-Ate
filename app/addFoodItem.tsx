import { useTheme } from '@/hooks/useTheme';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AddFoodItem: React.FC = () => {
    const theme = useTheme();
    return (
        <SafeAreaView
            style={[styles.container, { backgroundColor: theme.background }]} />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default AddFoodItem;