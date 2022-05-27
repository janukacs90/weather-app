import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AppStackNavigation from './AppStackNavigation';

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <AppStackNavigation />
    </NavigationContainer>
  );
};

export default MainNavigation;
