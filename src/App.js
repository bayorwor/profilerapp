import React from 'react';
import {StatusBar} from 'react-native';
import StackNavigator from './navigations/StackNavigator';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <StackNavigator />
    </>
  );
};

export default App;
