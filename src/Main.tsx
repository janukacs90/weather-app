import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {Weather} from './screens';
import {store} from './store/configureStore';

const Main = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Weather />
      </SafeAreaView>
    </Provider>
  );
};

export default Main;
