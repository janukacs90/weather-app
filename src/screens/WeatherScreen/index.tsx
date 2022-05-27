import React, {useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {WeatherItem} from '../../components';
import {loadWeatherData} from '../../store/actions';
import {IAppState} from '../../store/interfaces/app.interface';
import {IWeather} from '../../store/interfaces/weather.interfaces';

const WeatherScreen = props => {
  const {lat, lon} = props.route.params;
  const dispatch = useDispatch();
  const weather: IWeather = useSelector((state: IAppState) => state.weather);

  useEffect(() => {
    loadData();
    console.log(weather.data);
  }, []);

  const loadData = async () => {
    await dispatch(loadWeatherData(lat, lon));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={weather.data}
        onRefresh={() => loadData()}
        refreshing={weather.loading}
        style={styles.listStyle}
        renderItem={item => <WeatherItem details={item.item} />}
      />
    </View>
  );
};
export default WeatherScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listStyle: {
    flex: 1,
  },
});
