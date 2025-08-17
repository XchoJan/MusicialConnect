import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const AppInput = ({ label, placeholder, value, onChange }: InputProps) => {
  return (
    <View style={{ width: '100%' }}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.container}>
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          placeholderTextColor={'#e1dddd'}
          value={value}
          onChangeText={onChange}
        />
      </View>
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: colors.gray,
    borderRadius: 16,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  label: {
    color: '#fff',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: '100%',
    color: '#fff',
  },
});
