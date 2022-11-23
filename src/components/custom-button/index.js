import React from "react";
import { View, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const CustomButton = ({children, style, onPress}) => {
    return (
        <View style={styles.containerButton}>
            <TouchableOpacity style={{ ...styles.button, ...style }} onPress={onPress} >
                {children}
            </TouchableOpacity>
        </View>
    )
}

export default CustomButton;