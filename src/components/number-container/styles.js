import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.gray,
        borderColor: colors.primary,
        borderWidth: 2,
        borderRadius: 5,
        paddingTop: 7,
    },
    number: {
        fontSize: 18,
        fontFamily: 'PressStart2P-Regular',
    }
});