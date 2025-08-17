import React from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../theme/colors';

interface Button {
  title: string;
  isRed?: boolean;
  onPress?: () => void;
}

const AppButton = ({ title, isRed, onPress }: Button) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.4}
      style={isRed ? styles.container : styles.whiteContainer}
    >
      <Text style={isRed ? styles.redBtnTitle : styles.whiteBtnTitle}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.red,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 54,
    borderRadius: 100,
  },
  whiteContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 54,
    borderRadius: 100,
  },
  redBtnTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },
  whiteBtnTitle: {
    color: '#030303',
    fontSize: 20,
    fontWeight: '500',
  },
});
