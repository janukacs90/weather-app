import React from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {CustomButton, InputField, GeoFlatListItem} from '../../components';
import {cityNameChange, loadGeo} from '../../store/actions';
import {IAppState} from '../../store/interfaces/app.interface';
import {ICity, IGeo} from '../../store/interfaces/geo.interface';

const LocationScreen = props => {
  const dispatch = useDispatch();
  const geo: IGeo = useSelector((state: IAppState) => state.geo);

  const loadData = () => {
    if (geo.searchCity) {
      dispatch(loadGeo(geo.searchCity));
    } else {
      Alert.alert('Error', 'Invalid City Name');
    }
  };

  const geoSelect = (detail: ICity) => {
    props.navigation.navigate('weather_details', {
      lat: detail.lat,
      lon: detail.lon,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <InputField
          onChangeText={(text: string) => dispatch(cityNameChange(text))}
        />
        <CustomButton
          disabled={!geo.searchCity}
          name={'Search'}
          onPress={loadData}
        />
      </View>

      <FlatList
        data={geo.cityList}
        onRefresh={() => loadData()}
        refreshing={geo.loading}
        style={styles.listStyle}
        renderItem={item => (
          <GeoFlatListItem
            details={item.item}
            onPress={() => geoSelect(item.item)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  container: {
    flex: 1,
  },
  listStyle: {
    flex: 1,
  },
});

export default LocationScreen;
