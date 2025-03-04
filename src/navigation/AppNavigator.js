import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MemoryGame from '../components/BrainTraining/Exercises/MemoryGame';
import LogicPuzzle from '../components/BrainTraining/Exercises/LogicPuzzle';
import ReflexTest from '../components/BrainTraining/Exercises/ReflexTest';
import MemoryPvP from '../components/PvPMode/MemoryPvP';
import ReflexPvP from '../components/PvPMode/ReflexPvP';
import MeditationGuide from '../components/MeditationBreathing/MeditationGuide';
import BreathingExercise from '../components/MeditationBreathing/BreathingExercise';
import PersonalizedProgram from '../components/PersonalizedTraining/PersonalizedProgram';
import Header from '../components/Shared/Header';
import Footer from '../components/Shared/Footer';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: (props) => <Header {...props} />,
          footer: (props) => <Footer {...props} />,
        }}
      >
        <Stack.Screen name="MemoryGame" component={MemoryGame} />
        <Stack.Screen name="LogicPuzzle" component={LogicPuzzle} />
        <Stack.Screen name="ReflexTest" component={ReflexTest} />
        <Stack.Screen name="MemoryPvP" component={MemoryPvP} />
        <Stack.Screen name="ReflexPvP" component={ReflexPvP} />
        <Stack.Screen name="MeditationGuide" component={MeditationGuide} />
        <Stack.Screen name="BreathingExercise" component={BreathingExercise} />
        <Stack.Screen name="PersonalizedProgram" component={PersonalizedProgram} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
