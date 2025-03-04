import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MemoryGame = () => {
  const [sequence, setSequence] = useState([]);
  const [userInput, setUserInput] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (userInput.length === sequence.length && userInput.length !== 0) {
      if (JSON.stringify(userInput) === JSON.stringify(sequence)) {
        setScore(score + 1);
        generateSequence();
      } else {
        setIsGameOver(true);
      }
    }
  }, [userInput]);

  const generateSequence = () => {
    const newSequence = [...sequence, Math.floor(Math.random() * 4)];
    setSequence(newSequence);
    setUserInput([]);
  };

  const handleUserInput = (input) => {
    setUserInput([...userInput, input]);
  };

  const startGame = () => {
    setSequence([]);
    setUserInput([]);
    setIsGameOver(false);
    setScore(0);
    generateSequence();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Memory Game</Text>
      <Text style={styles.score}>Score: {score}</Text>
      {isGameOver ? (
        <View>
          <Text style={styles.gameOver}>Game Over</Text>
          <TouchableOpacity onPress={startGame} style={styles.button}>
            <Text style={styles.buttonText}>Restart</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.gameBoard}>
          {sequence.map((item, index) => (
            <View key={index} style={styles.sequenceItem}>
              <Text style={styles.sequenceText}>{item}</Text>
            </View>
          ))}
          <View style={styles.inputBoard}>
            {[0, 1, 2, 3].map((item) => (
              <TouchableOpacity
                key={item}
                onPress={() => handleUserInput(item)}
                style={styles.inputButton}
              >
                <Text style={styles.inputButtonText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  score: {
    fontSize: 18,
    marginBottom: 20,
  },
  gameOver: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  gameBoard: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  sequenceItem: {
    margin: 5,
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  sequenceText: {
    fontSize: 18,
  },
  inputBoard: {
    flexDirection: 'row',
    marginTop: 20,
  },
  inputButton: {
    margin: 5,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  inputButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default MemoryGame;
