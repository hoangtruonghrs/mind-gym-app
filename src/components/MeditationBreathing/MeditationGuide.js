import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MeditationGuide = () => {
  const [isMeditating, setIsMeditating] = useState(false);

  const startMeditation = () => {
    setIsMeditating(true);
  };

  const stopMeditation = () => {
    setIsMeditating(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meditation Guide</Text>
      {isMeditating ? (
        <View>
          <Text style={styles.instruction}>Focus on your breath...</Text>
          <Button title="Stop Meditation" onPress={stopMeditation} />
        </View>
      ) : (
        <Button title="Start Meditation" onPress={startMeditation} />
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
});

export default MeditationGuide;
