import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {CustomButton, InputField} from '../../components';
import {cityNameChange, loadGeo} from '../../store/actions';
import {IAppState} from '../../store/interfaces/app.interface';
import {IGeo} from '../../store/interfaces/geo.interface';

const WeatherScreen = () => {
  const dispatch = useDispatch();
  const geo: IGeo = useSelector((state: IAppState) => state.geo);
  return (
    <View>
      <View style={styles.searchBar}>
        <InputField
          onChangeText={(text: string) => dispatch(cityNameChange(text))}
        />
        <CustomButton
          disabled={!geo.searchCity}
          name={'Search'}
          onPress={() => dispatch(loadGeo(geo.searchCity))}
        />
      </View>
      {geo.cityList.map(item => (
        <Text>{item.name}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});

export default WeatherScreen;
