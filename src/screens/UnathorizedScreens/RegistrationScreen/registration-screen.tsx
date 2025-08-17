import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import AppContainer from '../../../components/AppContainer.tsx';
import AppInput from '../../../components/AppInput.tsx';
import { typography } from '../../../theme/fonts';
import AppButton from '../../../components/AppButton.tsx';
import HomePageIcon from '../../../assets/icons/HomePageIcon';
import BackArrow from '../../../assets/icons/BackArrow';
import { useNavigation } from '@react-navigation/native';
import { setToastVisible } from '../../../store/features/booleans/toastVisible.ts';
import Api from '../../../api';
import {useDispatch} from "react-redux";
import {setToken} from "../../../store/features/token/tokenSlice.ts";
import {TokensRepository} from "../../../helpers/tokens-repository.ts";

const RegistrationScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation();
  const [showPinCodeInput, setShowPinCodeInput] = useState(false);
  const [email, setEmail] = useState('');
  const [pin, setPin] = useState('');


  const handleSubmit = async () => {
    try {
      const response = await Api.auth({ email });
      console.log(response.data);
      setShowPinCodeInput(true);
    } catch (e: any) {
      console.log(e.response);
    }
  };

  const handleConfirm = async () => {
    try {
      const response = await Api.authConfirm({ email: email, code: pin });
      dispatch(setToken(response.data.token))
      TokensRepository.setAccessToken(response.data.token)
    } catch (e: any) {
      dispatch(setToastVisible({isVisible: true, type: 'error', text: e?.response?.data?.message}))
    }
  };

  return (
    <AppContainer scrollable>
      <Pressable onPress={() => navigation.goBack()}>
        <BackArrow />
      </Pressable>
      <ScrollView
        scrollEnabled={false}
        contentContainerStyle={{ flex: 1, width: '100%' }}
      >
        <View style={{ gap: 24, justifyContent: 'center', flex: 1 }}>
          <Text style={[typography.subTitle, { textAlign: 'center' }]}>
            Register with Email
          </Text>
          <AppInput
            placeholder={'email'}
            label={'Email'}
            value={email}
            onChange={setEmail}
          />

          {showPinCodeInput && (
            <AppInput
              placeholder={'pin code'}
              label={'Enter Pin'}
              value={pin}
              onChange={setPin}
            />
          )}

          <AppButton
            title={'Confirm'}
            isRed
            onPress={() => {
             !showPinCodeInput ? handleSubmit().then() : handleConfirm();
            }}
          />
        </View>
      </ScrollView>
    </AppContainer>
  );
};

export default RegistrationScreen;
