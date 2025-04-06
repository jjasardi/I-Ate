import { useTheme } from '@/hooks/useTheme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { TouchableOpacity, StyleSheet } from 'react-native';

type FloatingActionButton = {
    onPress: () => void;
}

const FloatingActionButton: React.FC<FloatingActionButton> = ({ onPress }) => {
    const colors = useTheme();
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, { backgroundColor: colors.primary }]}>
            <MaterialIcons
                name="add"
                color="white"
                size={30} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        borderRadius: 30,
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default FloatingActionButton;