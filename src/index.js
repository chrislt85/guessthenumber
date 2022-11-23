import React, { useState} from 'react';
import { ActivityIndicator, StyleSheet, View, Alert } from 'react-native';
import { Header } from './components';
import colors from './constants/colors';
import { StartGame, Game, GameOver } from './screens/index';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    'PressStart2P-Regular': require('../assets/fonts/PressStart2P-Regular.ttf'),
    'RubikIso-Regular': require('../assets/fonts/RubikIso-Regular.ttf'),
  });
  const [userNumber, setUserNumber] = useState(null);
  const [guessRounds, setGuessRounds] = useState(0);
  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  const onGameOver = (rounds) => {
    setGuessRounds(rounds);
  }

  const onRestart = () => {
    setUserNumber(null);
    setGuessRounds(0);
  }

  const onQuitGame = () => {
    Alert.alert('', 'Are you sure you want to quit?', [{text: 'Yes!', style: 'destructive', onPress: onRestart}, {text: 'No', style: 'cancel'}]);
    return;
  }

  let content = <StartGame onStartGame={onStartGame} />

  const getTitle = () => {
    let title;
    if(userNumber && guessRounds <= 0) {
      title = 'Guess the Number';
    } else if (guessRounds > 0) {
      title = 'Game Over';
    } else {
      title = 'Welcome';
    }
    return title;
  }

  if (userNumber && guessRounds <= 0){
    content = <Game selectedNumber={userNumber} onGameOver={onGameOver} onGameQuit={onQuitGame} />
  } else if (guessRounds > 0) {
    content = <GameOver rounds={guessRounds} selectedNumber={userNumber} onRestart={onRestart} />
  }

  if (!loaded) {
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size='large' color={colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title={getTitle()} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  containerLoader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
});
