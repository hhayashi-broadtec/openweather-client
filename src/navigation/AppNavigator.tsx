import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CurrentWeather from '../components/CurrentWeather';
import WeeklyForecast from '../components/WeeklyForecast';
import LocationWeather from '../components/LocationWeather';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="CurrentWeather">
      <Stack.Screen name="CurrentWeather" component={CurrentWeather} />
      <Stack.Screen name="WeeklyForecast" component={WeeklyForecast} />
      <Stack.Screen name="LocationWeather" component={LocationWeather} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
