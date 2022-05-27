import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

interface IProps {
  _placeholder?: string;
  onChangeText: (text: string) => void;
}

const InputField = ({_placeholder, onChangeText}: IProps) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputStyle}
        onChangeText={text => onChangeText(text)}
        placeholder={_placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    borderColor: '#1b1b1b',
    borderWidth: 1,
    padding: 10,
    fontSize: 15,
    borderRadius: 5,
  },
  inputContainer: {
    flex: 1,
  },
});

export default InputField;
