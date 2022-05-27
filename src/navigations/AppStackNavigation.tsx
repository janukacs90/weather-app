import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LocationScreen, WeatherScreen} from '../screens';

const Stack = createNativeStackNavigator();
const AppStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="geo_location">
      <Stack.Screen
        name="geo_location"
        options={{
          headerTitle: 'Select City',
        }}
        component={LocationScreen}
      />
      <Stack.Screen
        name="weather_details"
        options={{
          headerTitle: 'Weather Details',
        }}
        component={WeatherScreen}
      />
    </Stack.Navigator>
  );
};

export default AppStackNavigation;
