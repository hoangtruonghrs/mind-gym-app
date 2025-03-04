import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData, updateUserData } from '../../services/ApiService';
import { setUserData } from '../../store/userSlice';

const PersonalizedProgram = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.data);
  const [personalizedExercises, setPersonalizedExercises] = useState([]);

  useEffect(() => {
    const loadUserData = async () => {
      const data = await fetchUserData();
      dispatch(setUserData(data));
    };

    loadUserData();
  }, [dispatch]);

  useEffect(() => {
    if (userData) {
      const exercises = generatePersonalizedExercises(userData);
      setPersonalizedExercises(exercises);
    }
  }, [userData]);

  const generatePersonalizedExercises = (data) => {
    // AI logic to generate personalized exercises based on user data
    // Placeholder logic for now
    return [
      { id: 1, name: 'Memory Game', description: 'Improve your memory skills' },
      { id: 2, name: 'Logic Puzzle', description: 'Enhance your logical thinking' },
      { id: 3, name: 'Reflex Test', description: 'Boost your reflexes' },
    ];
  };

  const handleCompleteExercise = (exerciseId) => {
    // Update user data and progress
    const updatedData = { ...userData, progress: [...userData.progress, exerciseId] };
    updateUserData(updatedData);
    dispatch(setUserData(updatedData));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personalized Training Program</Text>
      {personalizedExercises.map((exercise) => (
        <View key={exercise.id} style={styles.exercise}>
          <Text style={styles.exerciseName}>{exercise.name}</Text>
          <Text style={styles.exerciseDescription}>{exercise.description}</Text>
          <Button title="Complete" onPress={() => handleCompleteExercise(exercise.id)} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  exercise: {
    marginBottom: 20,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  exerciseDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default PersonalizedProgram;
