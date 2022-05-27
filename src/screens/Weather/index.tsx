import React from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {IWeather} from '../../store/interfaces/weather.interfaces';

const WeatherScreen = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: IWeather) => state.data);

  return (
    <View>
      <Text>Weather</Text>
      {/* <Button onPress={() => dispatch(increment())} title="asas" /> */}
      <Text>{count}</Text>
    </View>
  );
};

export default WeatherScreen;
