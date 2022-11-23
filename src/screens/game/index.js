import React, { useState, useRef, useEffect} from "react";
import { View, Text, Button, Alert, TouchableOpacity} from 'react-native';
import { Card, NumberContainer, CustomText, CustomButton } from "../../components";
import { styles } from './styles';

const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    if (randomNumber === exclude){
        return generateRandomNumber(min, max, exclude);
    } else {
        return randomNumber;
    }
}

const Game = ({selectedNumber, onGameOver, onGameQuit}) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, selectedNumber));
    const [rounds, setRound] = useState(0);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const onHandleNextGuess = (direction) => {
        if(
            direction === 'lower' && currentGuess < selectedNumber ||
            direction === 'greater' && currentGuess > selectedNumber
        ) {
            Alert.alert('Don\'t lie', 'You know this is wrong', [{text: 'Sorry', style: 'cancel'}]);
            return;
        }
        if(direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }
        const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRound(currentRounds => currentRounds + 1);
    }

    useEffect(() => {
        if(currentGuess === selectedNumber) {
            onGameOver(rounds);
        }
    }, [currentGuess, selectedNumber, onGameOver]);

    return (
        <View style={styles.container}>
            <Card style={styles.content}>
                <CustomText style={styles.title}>Opponent's Number</CustomText>
                <NumberContainer number={currentGuess} />
                <View style={styles.containerButton}>
                    <CustomButton style={styles.lowerButton} onPress={() => onHandleNextGuess('lower')}>
                        <CustomText style={styles.buttonText}>lower</CustomText>
                    </CustomButton>
                    <CustomButton style={styles.greaterButton} onPress={() => onHandleNextGuess('greater')}>
                        <CustomText style={styles.buttonText}>greater</CustomText>
                    </CustomButton>
                </View>
            </Card>
            <CustomButton style={styles.quitButton} onPress={onGameQuit}>
                <CustomText style={styles.buttonText}>Quit!</CustomText>
            </CustomButton>
        </View>
    );
}

export default Game;