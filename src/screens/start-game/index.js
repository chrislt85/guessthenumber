import React, { useState} from "react";
import { View, Text, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { styles } from './styles';
import { Card, Input, NumberContainer, CustomText, CustomButton } from "../../components";
import colors from "../../constants/colors";

const StartGame = ({onStartGame}) => {
    const [number, setNumber] = useState('');
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [confirmed, setConfirmed] = useState(false);

    const onHandleChange = (value) => {
        setNumber(value.replace(/[^0-9]/g, ''));
    }

    const onHandleReset = () => {
        setNumber('');
        setConfirmed(false);
    }

    const onHandleConfirm = () => {
        const chosenNumber = parseInt(number, 10);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99)
        {
            Alert.alert('Invalid Number', 'Number has to be between 1 and 99', [{text: 'Okay', style: 'destructive', onPress: onHandleReset}]);
        }
        else
        {
            setConfirmed(true);
            setSelectedNumber(chosenNumber);
            setNumber('');
        }
    }

    const confirmedOutput = () => confirmed ? (
        <Card style={styles.confirmedContainer}>
            <CustomText style={styles.confirmedTitle}>Your selected number</CustomText>
            <NumberContainer number={selectedNumber} />
            <CustomButton style={styles.buttonStartGame} onPress={() => onStartGame(selectedNumber)}>
                <CustomText style={styles.buttonText}>Start Game</CustomText>
            </CustomButton>
        </Card>
    ) : null;

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>
                <CustomText style={styles.title}>Let's start!</CustomText>
                <Card style={styles.inputContainer}>
                    <CustomText style={styles.label}>Choose a number</CustomText>
                    <Input
                        style={styles.input}
                        placeholder="0" 
                        maxLength={2}
                        keyboardType="number-pad"
                        blurOnSubmit
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={onHandleChange}
                        value={number}
                    />
                    <View style={styles.buttonContainer}>
                        <CustomButton style={styles.buttonRestart} onPress={onHandleReset}>
                            <CustomText style={styles.buttonText}>Restart</CustomText>
                        </CustomButton>
                        <CustomButton style={styles.buttonConfirm} onPress={onHandleConfirm}>
                            <CustomText style={styles.buttonText}>Confirm</CustomText>
                        </CustomButton>
                    </View>
                </Card>
                {confirmedOutput()}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGame;