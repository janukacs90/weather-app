import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {IAppState} from '../../store/interfaces/app.interface';
import {IWeather} from '../../store/interfaces/weather.interfaces';

const WeatherScreen = props => {
  const weather: IWeather = useSelector((state: IAppState) => state.weather);

  const loadData = () => {};

  return (
    <View style={styles.container}>
      <FlatList
        data={weather.data}
        onRefresh={() => loadData()}
        refreshing={weather.loading}
        style={styles.listStyle}
        renderItem={item => (
        //   <GeoFlatListItem
        //     details={item.item}
        //     onPress={() => geoSelect(item.item)}
        //   />
        )}
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
