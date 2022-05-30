import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {CustomButton, InputField, GeoFlatListItem} from '../../components';
import {AlertTypes} from '../../config/config';
import colors from '../../helpers/colors';
import {appDisplayMessage} from '../../helpers/utils';
import {cityNameChange, loadGeo} from '../../store/actions';
import {IAppState} from '../../store/interfaces/app.interface';
import {ICity, IGeo} from '../../store/interfaces/geo.interface';
import {GEO_FETCH_ERROR} from '../../store/reducers';

const LocationScreen = props => {
  const dispatch = useDispatch();
  const geo: IGeo = useSelector((state: IAppState) => state.geo);

  const loadData = () => {
    if (geo.searchCity) {
      dispatch(loadGeo(geo.searchCity));
    } else {
      dispatch({
        type: GEO_FETCH_ERROR,
        payload: 'City name cannot be empty.',
      });
      appDisplayMessage(AlertTypes.danger, 'City name cannot be empty.');
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
          _placeholder={'Please enter city name'}
        />
        <View style={styles.gap} />
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
        contentContainerStyle={[
          styles.emptyListContainer,
          {
            justifyContent: geo.cityList.length === 0 ? 'center' : 'flex-start',
          },
        ]}
        ListEmptyComponent={() => (
          <View style={styles.emptyListView}>
            <Text>List is empty</Text>
          </View>
        )}
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
    borderBottomColor: colors.gray100,
    borderBottomWidth: 0.5,
  },
  container: {
    flex: 1,
    backgroundColor: colors.primaryWhite,
  },
  listStyle: {
    flex: 1,
  },
  gap: {
    margin: 10,
  },
  emptyListContainer: {
    flex: 1,
  },
  emptyListView: {
    alignItems: 'center',
  },
});

export default LocationScreen;
