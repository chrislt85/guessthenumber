import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    content: {
        width: '70%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    title: {
        // fontSize: 16,
        fontSize: 12,
    },
    containerButton: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    lowerButton: {
        width: 100,
        backgroundColor: colors.alternative,
    },
    greaterButton: {
        width: 115,
        backgroundColor: colors.primary,
    },
    quitButton: {
        width: 110,
        backgroundColor: colors.secondary,
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