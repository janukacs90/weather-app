import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../helpers/colors';
import {ICity} from '../../store/interfaces/geo.interface';

interface IProps {
  details: ICity;
  onPress: () => void;
}

const GeoFlatListItem = ({details, onPress}: IProps) => {
  return (
    <TouchableOpacity style={style.itemStyle} onPress={onPress}>
      <Text style={style.textStyle}>
        {details.name} - {details.country}
      </Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  itemStyle: {
    borderBottomColor: colors.gray150,
    borderBottomWidth: 1,
    padding: 15,
  },
  textStyle: {
    fontWeight: 'bold',
  },
});

export default GeoFlatListItem;
