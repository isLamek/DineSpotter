import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainMenu from './Screens/MainMenu';
import DistanceInput from './Screens/DistanceInput';
import LocationInput from './Screens/LocationInput';
import Filters from './Screens/Filters';
import Results from './Screens/Results';
import Final from './Screens/Final';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MainMenu'>
        <Stack.Screen component = {MainMenu} name = "MainMenu" />
        <Stack.Screen component = {DistanceInput} name = "DistanceInput" />
        <Stack.Screen component = {LocationInput} name = "LocationInput" />
        <Stack.Screen component = {Filters} name='Filters' />
        <Stack.Screen component = {Results} name='Results' />
        <Stack.Screen component = {Final} name='Final' />
      </Stack.Navigator>
      <StatusBar styles="auto" />
    </NavigationContainer>
  );
};

