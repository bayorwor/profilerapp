import React, {createContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Alert} from 'react-native';

export const TransactionsContext = createContext();

const TransactionsContextProvider = ({children}) => {
  async function SaveToLocalStorage(val) {
    const value = await AsyncStorage.getItem('@training');
    const jsonValue = await JSON.parse(value);
    if (jsonValue) {
      await AsyncStorage.setItem(
        '@training',
        JSON.stringify([...jsonValue, val]),
      )
        .then(() => console.log(`saved to local storage`))
        .catch(error => console.log(error));
    }
  }

  async function SaveToServer() {
    try {
      const value = await AsyncStorage.getItem('@training');
      const jsonValue = await JSON.parse(value);
      const {data} = await axios.post(
        `http://moap.techriesgh.com/api/synctraining.php`,
        jsonValue,
      );
      if (data.message === 'success') {
        Alert.alert('synchronized successfully');
      } else {
        Alert.alert('OOPS!! Something went wrong');
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TransactionsContext.Provider value={{SaveToLocalStorage, SaveToServer}}>
      {children}
    </TransactionsContext.Provider>
  );
};

export default TransactionsContextProvider;
