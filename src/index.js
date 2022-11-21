import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from './components';
import { StartGame, Game } from './screens/index';


export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  let content = <StartGame onStartGame={onStartGame} />

  if (userNumber){
    content = <Game  />
  }

  return (
    <View style={styles.container}>
      <Header title={userNumber ? 'Guess the number' : 'Welcome'} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
