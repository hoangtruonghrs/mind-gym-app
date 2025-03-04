import { createStore, combineReducers } from 'redux';

// Initial state
const initialState = {
  user: null,
  brainTraining: {
    memoryGame: {},
    logicPuzzle: {},
    reflexTest: {},
  },
  pvpMode: {
    memoryPvP: {},
    reflexPvP: {},
  },
  meditationBreathing: {
    meditationGuide: {},
    breathingExercise: {},
  },
  personalizedTraining: {
    personalizedProgram: {},
  },
};

// Action types
const SET_USER = 'SET_USER';
const UPDATE_MEMORY_GAME = 'UPDATE_MEMORY_GAME';
const UPDATE_LOGIC_PUZZLE = 'UPDATE_LOGIC_PUZZLE';
const UPDATE_REFLEX_TEST = 'UPDATE_REFLEX_TEST';
const UPDATE_MEMORY_PVP = 'UPDATE_MEMORY_PVP';
const UPDATE_REFLEX_PVP = 'UPDATE_REFLEX_PVP';
const UPDATE_MEDITATION_GUIDE = 'UPDATE_MEDITATION_GUIDE';
const UPDATE_BREATHING_EXERCISE = 'UPDATE_BREATHING_EXERCISE';
const UPDATE_PERSONALIZED_PROGRAM = 'UPDATE_PERSONALIZED_PROGRAM';

// Action creators
export const setUser = (user) => ({ type: SET_USER, payload: user });
export const updateMemoryGame = (data) => ({ type: UPDATE_MEMORY_GAME, payload: data });
export const updateLogicPuzzle = (data) => ({ type: UPDATE_LOGIC_PUZZLE, payload: data });
export const updateReflexTest = (data) => ({ type: UPDATE_REFLEX_TEST, payload: data });
export const updateMemoryPvP = (data) => ({ type: UPDATE_MEMORY_PVP, payload: data });
export const updateReflexPvP = (data) => ({ type: UPDATE_REFLEX_PVP, payload: data });
export const updateMeditationGuide = (data) => ({ type: UPDATE_MEDITATION_GUIDE, payload: data });
export const updateBreathingExercise = (data) => ({ type: UPDATE_BREATHING_EXERCISE, payload: data });
export const updatePersonalizedProgram = (data) => ({ type: UPDATE_PERSONALIZED_PROGRAM, payload: data });

// Reducers
const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
};

const brainTrainingReducer = (state = initialState.brainTraining, action) => {
  switch (action.type) {
    case UPDATE_MEMORY_GAME:
      return { ...state, memoryGame: action.payload };
    case UPDATE_LOGIC_PUZZLE:
      return { ...state, logicPuzzle: action.payload };
    case UPDATE_REFLEX_TEST:
      return { ...state, reflexTest: action.payload };
    default:
      return state;
  }
};

const pvpModeReducer = (state = initialState.pvpMode, action) => {
  switch (action.type) {
    case UPDATE_MEMORY_PVP:
      return { ...state, memoryPvP: action.payload };
    case UPDATE_REFLEX_PVP:
      return { ...state, reflexPvP: action.payload };
    default:
      return state;
  }
};

const meditationBreathingReducer = (state = initialState.meditationBreathing, action) => {
  switch (action.type) {
    case UPDATE_MEDITATION_GUIDE:
      return { ...state, meditationGuide: action.payload };
    case UPDATE_BREATHING_EXERCISE:
      return { ...state, breathingExercise: action.payload };
    default:
      return state;
  }
};

const personalizedTrainingReducer = (state = initialState.personalizedTraining, action) => {
  switch (action.type) {
    case UPDATE_PERSONALIZED_PROGRAM:
      return { ...state, personalizedProgram: action.payload };
    default:
      return state;
  }
};

// Root reducer
const rootReducer = combineReducers({
  user: userReducer,
  brainTraining: brainTrainingReducer,
  pvpMode: pvpModeReducer,
  meditationBreathing: meditationBreathingReducer,
  personalizedTraining: personalizedTrainingReducer,
});

// Store
const store = createStore(rootReducer);

export default store;
