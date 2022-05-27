import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Weather} from '../screens';

const Stack = createNativeStackNavigator();
const AppStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Weather">
      <Stack.Screen name="Weather" component={Weather} />
    </Stack.Navigator>
  );
};

export default AppStackNavigation;
