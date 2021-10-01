import React, {createContext, useReducer} from 'react';
import {Alert} from 'react-native';
import trainingsReducer from '../reducers/trainingsReducer';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GET_TRAININGS} from '../constants/trainingsConstant';

const initialState = {
  trainings: [],
  loading: false,
  error: null,
  success: false,
};

export const TrainingsContext = createContext(initialState);

const TrainingsContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(trainingsReducer, initialState);
  //get data from the server
  async function getTrainings() {
    try {
      const {data} = await axios.get(
        'http://moap.techriesgh.com/api/gettraining.php',
      );

      await AsyncStorage.setItem('@trainings', JSON.stringify(data))
        .then(() => Alert.alert(`download successful`))
        .catch(() => Alert.alert(error));
    } catch (error) {
      console.log(error);
    }
  }

  //get data from localstorage
  async function getLocalTrainings() {
    try {
      const jsonValue = await AsyncStorage.getItem('@trainings');
      const trainings = jsonValue != null ? JSON.parse(jsonValue) : null;
      dispatch({
        type: GET_TRAININGS,
        payload: trainings,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TrainingsContext.Provider
      value={{getTrainings, getLocalTrainings, trainings: state.trainings}}>
      {children}
    </TrainingsContext.Provider>
  );
};

export default TrainingsContextProvider;
