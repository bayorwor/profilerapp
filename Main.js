import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import App from './src/App';
import {SafeAreaView} from 'react-native';
import FarmersContextProvider from './src/context/FarmersContext';
import TrainingsContextProvider from './src/context/TrainingsContext';
import TransactionsContextProvider from './src/context/TransactionsContext';

const Main = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <TrainingsContextProvider>
          <FarmersContextProvider>
            <TransactionsContextProvider>
              <SafeAreaView style={{flex: 1}}>
                <App />
              </SafeAreaView>
            </TransactionsContextProvider>
          </FarmersContextProvider>
        </TrainingsContextProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default Main;
