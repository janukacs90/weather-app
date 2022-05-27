import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../helpers/colors';

interface IWeatherItem {
  main: string;
  description: string;
  icon: string;
}

interface IProps {
  dt: number;
  weather: IWeatherItem;
}

const WeatherItem = ({details}: IProps) => {
  return (
    <View style={styles.itemWrapper}>
      <View style={styles.dateWrapper}>
        <Text style={styles.dateText}>{}</Text>
      </View>
      <View style={styles.itemInformation}>
        <View style={styles.detailsWrapper}></View>
        <View style={styles.iconWrapper}></View>
      </View>
    </View>
  );
};

export default WeatherItem;

const styles = StyleSheet.create({
  detailsWrapper: {},
  iconWrapper: {},
  itemWrapper: {},
  itemInformation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateWrapper: {
    backgroundColor: colors.gray400,
  },
  dateText: {
    fontWeight: 'bold',
    color: colors.primaryBlack,
  },
});
