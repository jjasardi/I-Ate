import { TouchableOpacity, StyleSheet } from "react-native"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type AccountButton = {
    onPress: () => void;
}

const AccountButton: React.FC<AccountButton> = ({ onPress }) => {
    return (
        // OnPress has a bug on header https://github.com/expo/expo/issues/29489
        <TouchableOpacity onPressIn={onPress}>
            <MaterialIcons name="account-circle" size={48} color="white" />
        </TouchableOpacity>)
};

export default AccountButton;