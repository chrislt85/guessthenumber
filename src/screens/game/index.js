import React from "react";
import { View, Text } from "react-native";
import { styles } from './styles';

const generateRandomNumber = (min, max, exclude) => {}

const Game = ({selectedNumber}) => {
    const [currentGuess, setCurrenGuess] = useState(generateRandomNumber(1, 100, selectedNumber));

    return (
        <View style={styles.container}>
            <Text>Game Screen</Text>
        </View>
    );
}

export default Game;