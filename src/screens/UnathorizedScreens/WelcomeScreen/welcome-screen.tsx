import React, {useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';
import { typography } from '../../../theme/fonts';
import AppButton from '../../../components/AppButton.tsx';
import { useNavigation } from '@react-navigation/native';
import AppContainer from "../../../components/AppContainer.tsx";
import {setToastVisible} from "../../../store/features/booleans/toastVisible.ts";
import {useDispatch} from "react-redux";
import MainLogo from "../../../assets/icons/MainLogo";
import Api from "../../../api";

const WelcomeScreen = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();

  const handlePing = async () => {
    try {
      const response = await Api.ping()
      console.log(response.data, 'response')
    }catch (e: any){
      console.log(e.response)
    }
  }

  useEffect(() => {
    (async () => {
     await handlePing()
    })()
  }, []);

  return (
    <AppContainer>
      <View style={styles.contentBox}>
        <Text style={styles.title}>Musician Connect</Text>
        <View style={styles.iconBox}>
          <MainLogo/>
        </View>
      </View>

      <View>
        <Text style={[typography.title, { marginVertical: 12 }]}>
          Creative Community
        </Text>
        <Text style={typography.subTitle}>
          Join a vibrant space for musicians to showcase their art and connect
          with peers.
        </Text>
      </View>

      <View style={styles.btnsContainer}>
        <AppButton
          onPress={() => navigation.navigate('RegistrationScreen')}
          isRed
          title={'Join now'}
        />
      </View>
    </AppContainer>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  contentBox: {
    backgroundColor: colors.gray,
    width: '100%',
    borderRadius: 18,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '500',
    marginBottom: 16,
  },
  iconBox: {
    alignSelf: 'center',
  },
  btnsContainer: {
    marginTop: 24,
    width: '100%',
    gap: 14,
  },
});
