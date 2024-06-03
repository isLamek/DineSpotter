import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainMenu from './Screens/MainMenu';
import DistanceInput from './Screens/DistanceInput';
import LocationInput from './Screens/LocationInput';
import Filters from './Screens/Filters';
import Result from './Screens/Result';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MainMenu' screenOptions={{ headerShown: false}}>
        <Stack.Screen component={MainMenu} name="MainMenu" />
        <Stack.Screen component={DistanceInput} name="DistanceInput" />
        <Stack.Screen component={LocationInput} name="LocationInput" />
        <Stack.Screen component={Filters} name='Filters' />
        <Stack.Screen component={Result} name="Result" />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
