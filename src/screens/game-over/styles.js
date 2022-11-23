import { StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/colors";

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: width * 0.8,
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContent: {
        fontSize: 16,
        paddingVertical: 10,
        textAlign: 'center',
    },
    image: {
        width: 240,
        height: 200,
    },
    button: {
        width: 125,
        backgroundColor: colors.primary,
    },
    buttonText: {
        fontSize: 12,
        color: colors.white,
        paddingHorizontal: 10,
        width: '90%',
        textAlignVertical: 'center',
        textAlign: 'center',
        paddingTop: 5,
    },
});