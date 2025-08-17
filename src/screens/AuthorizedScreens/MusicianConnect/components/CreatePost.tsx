import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AppInput from '../../../../components/AppInput.tsx';
import AppButton from '../../../../components/AppButton.tsx';
import { colors } from '../../../../theme/colors';

const CreatePost = () => {
  return (
    <ScrollView scrollEnabled={false}>
      <View style={[styles.placeholder, { marginTop: 0 }]}>
        <View style={{ width: '100%', gap: 18, marginBottom: 60 }}>
          <AppInput label={'Post title'} />
          <AppInput label={'Post description'} />

          <TouchableOpacity style={styles.addImageBox}>
            <Text style={styles.addImageText}>+</Text>
          </TouchableOpacity>
        </View>

        <AppButton title={'Create'} isRed />
      </View>
    </ScrollView>
  );
};

export default CreatePost;

const styles = StyleSheet.create({
  placeholder: {
    marginTop: 32,
    alignItems: 'center',
  },
  placeholderText: {
    color: '#aaa',
    fontSize: 16,
    marginBottom: 12,
  },
  responds: {
    width: '100%',
    height: 80,
    backgroundColor: colors.gray,
    alignItems: 'center',
    paddingHorizontal: 16,
    borderRadius: 16,
    flexDirection: 'row',
    gap: 18,
  },
  respondsImage: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  addImageBox: {
    width: 100,
    height: 100,
    backgroundColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  addImageText: {
    fontSize: 50,
    color: '#fff',
    fontWeight: '200',
  },
});
