import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    containerButton: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    button: {
        // width: 130,
        paddingVertical: 5,
        //backgroundColor: colors.secondary,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginVertical:5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    /*text: {
        fontFamily: 'PressStart2P-Regular',
    }*/
});