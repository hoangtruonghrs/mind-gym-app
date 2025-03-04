import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ReflexPvP = () => {
  const [targetVisible, setTargetVisible] = useState(false);
  const [reactionTime, setReactionTime] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [isGameActive, setIsGameActive] = useState(false);
  const [opponentReactionTime, setOpponentReactionTime] = useState(null);
  const [isOpponentTurn, setIsOpponentTurn] = useState(false);

  useEffect(() => {
    if (isGameActive && !isOpponentTurn) {
      const randomDelay = Math.floor(Math.random() * 3000) + 1000;
      const timer = setTimeout(() => {
        setTargetVisible(true);
        setStartTime(Date.now());
      }, randomDelay);
      return () => clearTimeout(timer);
    }
  }, [isGameActive, isOpponentTurn]);

  const startGame = () => {
    setIsGameActive(true);
    setTargetVisible(false);
    setReactionTime(null);
    setOpponentReactionTime(null);
    setIsOpponentTurn(false);
  };

  const handlePress = () => {
    if (targetVisible) {
      const endTime = Date.now();
      setReactionTime(endTime - startTime);
      setIsGameActive(false);
      setTargetVisible(false);
      setIsOpponentTurn(true);
      simulateOpponentTurn();
    }
  };

  const simulateOpponentTurn = () => {
    const randomDelay = Math.floor(Math.random() * 3000) + 1000;
    setTimeout(() => {
      const opponentTime = Math.floor(Math.random() * 500) + 200;
      setOpponentReactionTime(opponentTime);
      setIsOpponentTurn(false);
    }, randomDelay);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reflex PvP</Text>
      {reactionTime !== null && (
        <Text style={styles.reactionTime}>Your Reaction Time: {reactionTime} ms</Text>
      )}
      {opponentReactionTime !== null && (
        <Text style={styles.reactionTime}>Opponent's Reaction Time: {opponentReactionTime} ms</Text>
      )}
      <TouchableOpacity onPress={startGame} style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
      {isGameActive && !isOpponentTurn && (
        <TouchableOpacity onPress={handlePress} style={styles.target}>
          {targetVisible && <Text style={styles.targetText}>Tap!</Text>}
        </TouchableOpacity>
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
  reactionTime: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  target: {
    width: 100,
    height: 100,
    backgroundColor: '#ff0000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  targetText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ReflexPvP;
