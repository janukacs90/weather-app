import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../../helpers/colors';

interface IProps {
  name: string;
  onPress: () => void;
  disabled: boolean;
}

const CustomButton = ({name, onPress}: IProps) => {
  return (
    <View>
      <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
        <Text style={styles.textStyle} numberOfLines={1}>
          {name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: colors.twitterBlue,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default CustomButton;
