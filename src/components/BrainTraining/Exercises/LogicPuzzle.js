import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const LogicPuzzle = () => {
  const [puzzle, setPuzzle] = useState(generatePuzzle());
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const generatePuzzle = () => {
    // Generate a simple logic puzzle
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const operator = Math.random() > 0.5 ? '+' : '-';
    const answer = operator === '+' ? num1 + num2 : num1 - num2;
    return { num1, num2, operator, answer };
  };

  const handleUserAnswer = (input) => {
    setUserAnswer(input);
  };

  const checkAnswer = () => {
    if (parseInt(userAnswer) === puzzle.answer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const startNewPuzzle = () => {
    setPuzzle(generatePuzzle());
    setUserAnswer('');
    setIsCorrect(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logic Puzzle</Text>
      <Text style={styles.puzzle}>
        {puzzle.num1} {puzzle.operator} {puzzle.num2} = ?
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={userAnswer}
          onChangeText={handleUserAnswer}
          keyboardType="numeric"
        />
        <TouchableOpacity onPress={checkAnswer} style={styles.button}>
          <Text style={styles.buttonText}>Check</Text>
        </TouchableOpacity>
      </View>
      {isCorrect !== null && (
        <Text style={isCorrect ? styles.correct : styles.incorrect}>
          {isCorrect ? 'Correct!' : 'Incorrect'}
        </Text>
      )}
      <TouchableOpacity onPress={startNewPuzzle} style={styles.button}>
        <Text style={styles.buttonText}>New Puzzle</Text>
      </TouchableOpacity>
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
  puzzle: {
    fontSize: 18,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    width: 100,
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
  correct: {
    fontSize: 18,
    color: 'green',
    marginBottom: 20,
  },
  incorrect: {
    fontSize: 18,
    color: 'red',
    marginBottom: 20,
  },
});

export default LogicPuzzle;
