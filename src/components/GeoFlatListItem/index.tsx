import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
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
      <Text style={style.stateText}>{details.state}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  itemStyle: {
    borderBottomColor: colors.gray150,
    borderBottomWidth: 0.5,
    padding: 15,
  },
  textStyle: {
    fontWeight: 'bold',
  },
  stateText: {
    marginTop: 5,
    color: colors.gray500,
  },
});

export default GeoFlatListItem;
