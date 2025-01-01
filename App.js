import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CurrentWeather from './src/components/CurrentWeather';
import WeeklyForecast from './src/components/WeeklyForecast';
import LocationWeather from './src/components/LocationWeather';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CurrentWeather">
        <Stack.Screen name="CurrentWeather" component={CurrentWeather} />
        <Stack.Screen name="WeeklyForecast" component={WeeklyForecast} />
        <Stack.Screen name="LocationWeather" component={LocationWeather} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
