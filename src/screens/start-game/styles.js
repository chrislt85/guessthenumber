import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginVertical: 15,
    },
    title: {
        fontSize: 18,
        color: colors.text,
        textAlign: 'center',
        paddingVertical: 20,
    },
    label: {
        fontSize: 15,
        color: colors.text,
        paddingVertical: 5,
        textAlign: 'center',
    },
    inputContainer: {
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        paddingVertical: 20,
    },
    input: {
        minWidth: 70,
        fontSize: 22,
        paddingVertical: 10,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '95%',
        justifyContent: 'space-around',
    },
    confirmedContainer:{
        width: '70%',
        height: 180,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 20,
    },
    confirmedTitle: {
        fontSize: 12,
    }, 
    buttonRestart: {
        width: 116,
        backgroundColor: colors.secondary,
    },
    buttonConfirm: {
        width: 116,
        backgroundColor: colors.primary,
    },
    buttonStartGame: {
        width: 160,
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