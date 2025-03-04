import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const BreathingExercise = () => {
  const [isBreathing, setIsBreathing] = useState(false);
  const [breathCount, setBreathCount] = useState(0);

  useEffect(() => {
    let timer;
    if (isBreathing) {
      timer = setInterval(() => {
        setBreathCount((prevCount) => prevCount + 1);
      }, 4000); // 4 seconds for each breath cycle
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isBreathing]);

  const startBreathing = () => {
    setIsBreathing(true);
  };

  const stopBreathing = () => {
    setIsBreathing(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Breathing Exercise</Text>
      {isBreathing ? (
        <View>
          <Text style={styles.instruction}>Breathe in... Breathe out...</Text>
          <Text style={styles.breathCount}>Breath Count: {breathCount}</Text>
          <Button title="Stop Breathing" onPress={stopBreathing} />
        </View>
      ) : (
        <Button title="Start Breathing" onPress={startBreathing} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  instruction: {
    fontSize: 18,
    marginBottom: 16,
  },
  breathCount: {
    fontSize: 18,
    marginBottom: 16,
  },
});

export default BreathingExercise;
