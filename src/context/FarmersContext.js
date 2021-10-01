import React, {createContext, useReducer} from 'react';
import {GET_FARMERS} from '../constants/farmersConstants';
import farmersReducer from '../reducers/farmersReducers';
import {Alert} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  farmers: [],
  loading: false,
  error: null,
};

export const FarmersContext = createContext(initialState);

const FarmersContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(farmersReducer, initialState);

  //get farmers from the server
  async function getFarmers() {
    try {
      const {data} = await axios.get(
        'http://moap.techriesgh.com/api/getfarmers.php',
      );
      console.log(data);
      await AsyncStorage.setItem('@farmers', JSON.stringify(data))
        .then(() => Alert.alert(`download successful`))
        .catch(() => Alert.alert(error));
    } catch (error) {
      console.log(error);
    }
  }

  //get farmers from the localstorage
  //get data from localstorage
  async function getLocalFarmers() {
    try {
      const jsonValue = await AsyncStorage.getItem('@farmers');
      const farmers = jsonValue != null ? JSON.parse(jsonValue) : null;
      dispatch({
        type: GET_FARMERS,
        payload: farmers,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <FarmersContext.Provider
      value={{getFarmers, getLocalFarmers, farmers: state.farmers}}>
      {children}
    </FarmersContext.Provider>
  );
};

export default FarmersContextProvider;
