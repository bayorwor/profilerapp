import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TrainFarmers from '../screens/TrainFarmers';
import BarcodeScanner from '../components/BarcodeScanner';
import HomeScreen from '../screens/HomeScreen';
import TrainingsList from '../screens/TrainingsList';
import FarmersList from '../screens/FarmersList';
import SplashScreen from '../screens/SplashScreen';
import TrainingDetails from '../screens/TrainingDetails';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="alltrainings"
        component={TrainingsList}
        options={{headerShown: true, title: 'List of all trainings'}}
      />
      <Stack.Screen
        name="allfarmers"
        component={FarmersList}
        options={{headerShown: true, title: 'List of all farmers'}}
      />
      <Stack.Screen
        name="trainfarmer"
        component={TrainFarmers}
        options={{headerShown: true, title: 'Train a farmer'}}
      />
      <Stack.Screen
        name="trainingdetails"
        component={TrainingDetails}
        options={{headerShown: true, title: 'Training Details'}}
      />
      <Stack.Screen
        name="scan"
        component={BarcodeScanner}
        options={{headerShown: true, title: 'Scan ID Card'}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
