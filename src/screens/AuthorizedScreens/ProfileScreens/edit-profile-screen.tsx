import React, { useEffect } from 'react';
import AppContainer from '../../../components/AppContainer.tsx';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AppInput from '../../../components/AppInput.tsx';
import AppButton from '../../../components/AppButton.tsx';
import { setToastVisible } from '../../../store/features/booleans/toastVisible.ts';
import { useDispatch, useSelector } from 'react-redux';
import { TokensRepository } from '../../../helpers/tokens-repository.ts';
import { setToken } from '../../../store/features/token/tokenSlice.ts';
import BackArrow from '../../../assets/icons/BackArrow';
import { useNavigation } from '@react-navigation/native';
import { UserType } from '../../../types/userDataTypes.tsx';
import Api from '../../../api';

const EditProfileScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userData: UserType = useSelector((store: any) => store.userData);
  const instruments = useSelector((store: any) => store.instruments);

  console.log(instruments, 'instruments')

  return (
    <AppContainer scrollable>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
        <Pressable onPress={() => navigation.goBack()}>
          <BackArrow />
        </Pressable>
        <Text style={[styles.title, { top: 10 }]}>Profile</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/profileimg.jpeg')}
        />
        <TouchableOpacity activeOpacity={0.4} style={styles.photoBox}>
          <Text style={{ color: '#fff' }}>Add photo</Text>
        </TouchableOpacity>
        <Text style={[styles.title, { fontSize: 18 }]}>Basic info</Text>

        <View style={{ gap: 12 }}>
          <AppInput label={'First Name'} />
          <AppInput label={'Last Name'} />
          <AppInput label={'Stage Name'} />
          <AppInput label={'Location (City, Country)'} />
          <AppInput label={'Date of Birth'} />
          <AppInput label={'Short Bio'} />
        </View>

        <Text style={[styles.title, { fontSize: 18, marginTop: 32 }]}>
          Music Info
        </Text>

        <View style={{ gap: 12 }}>
          <AppInput label={'Main Instrument'} />
          <AppInput label={'Other Instruments'} />
        </View>

        <Text style={[styles.title, { fontSize: 18, marginTop: 32 }]}>
          Links & Media
        </Text>

        <View style={{ gap: 12, marginBottom: 44 }}>
          <AppInput label={'Email/Gmail'} />
          <AppInput label={'Telegram'} />
          <AppInput label={'Instagram'} />
          <AppInput label={'Linkedin'} />
          <AppInput label={'Pinterest'} />
        </View>

        <AppButton
          title={'Save Profile'}
          isRed
          onPress={() =>
            dispatch(
              setToastVisible({
                isVisible: true,
                type: 'success',
                text: 'Successfully Saved',
              }),
            )
          }
        />

        <View style={{ marginVertical: 8 }} />
        <AppButton
          title={'Logout'}
          isRed
          onPress={() => {
            dispatch(setToken(''));
            TokensRepository.removeAccessToken();
          }}
        />
      </ScrollView>
    </AppContainer>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '500',
    marginBottom: 24,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 100,
    alignSelf: 'center',
  },
  photoBox: {
    alignSelf: 'center',
    marginBottom: 24,
  },
});
