import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import colors from '../../helpers/colors';
import {getDate} from '../../helpers/utils';
import {IWeatherDetails} from '../../store/interfaces/weather.interfaces';
interface IProps {
  details: IWeatherDetails;
}

const WeatherItem = ({details}: IProps) => {
  return (
    <View style={styles.itemWrapper}>
      <View style={styles.dateWrapper}>
        <Text style={styles.dateText}>{getDate(details.dt)}</Text>
      </View>

      {details.weather.map((item, index) => (
        <View style={styles.itemInformation} key={index}>
          <View style={styles.detailsWrapper}>
            <Text style={styles.mainText}>{item.main}</Text>
            <Text style={styles.descriptionText}>{item.description}</Text>
          </View>
          <View style={styles.iconWrapper}>
            <FastImage
              style={{width: 70, height: 70}}
              source={{
                uri:
                  'https://openweathermap.org/img/wn/' + item.icon + '@2x.png',
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.contain}
              onProgress={e =>
                console.log(e.nativeEvent.loaded / e.nativeEvent.total)
              }
            />
          </View>
        </View>
      ))}
    </View>
  );
};

export default WeatherItem;

const styles = StyleSheet.create({
  detailsWrapper: {
    justifyContent: 'center',
  },
  iconWrapper: {},
  itemWrapper: {},
  itemInformation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: colors.primaryWhite,
  },
  dateWrapper: {
    backgroundColor: colors.gray400,
  },
  dateText: {
    fontWeight: 'bold',
    color: colors.primaryBlack,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  mainText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: 14,
    fontWeight: '500',
  },
});
