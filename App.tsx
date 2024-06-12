import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MetricsCalculatorScreen from './screens/ConversionCalculator'
import HabitTracker from './screens/HabitTracker';
import Splash from './screens/Splash';

// Define the type for the stack navigator's parameters
export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
         <Stack.Screen
          name="Home"
          component={MetricsCalculatorScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={HabitTracker} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
