import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import MainNavigation from './navigations/MainNavigation';
import {store} from './store/configureStore';

const Main = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={style.container}>
        <MainNavigation />
      </SafeAreaView>
    </Provider>
  );
};

export default Main;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
