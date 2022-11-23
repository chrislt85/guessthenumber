import React from "react";
import { View, Text, Image, Button } from "react-native";
import { styles } from "./styles";
import { Card, CustomText, CustomButton } from "../../components";

const GameOver = ({rounds, selectedNumber, onRestart}) => {
    return (
        <View style={styles.container}>
            <Card style={styles.content}>
                <Image
                    source={{ uri: 'https://t4.ftcdn.net/jpg/02/11/54/33/360_F_211543376_kv7x0SwdITkWbqajGzglhcvZV25AsPsS.jpg' }} 
                    style={styles.image} 
                />
                <CustomText style={styles.textContent}>Rounds: {rounds}</CustomText>
                <CustomText style={styles.textContent}>Selected Number: {selectedNumber}</CustomText>
                <CustomButton style={styles.button} onPress={onRestart}>
                    <CustomText style={styles.buttonText}>Restart</CustomText>
                </CustomButton>
            </Card>
        </View>
    )
}

export default GameOver;