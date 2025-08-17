import React from 'react';
import AppContainer from '../../../components/AppContainer.tsx';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  Pressable, TouchableOpacity,
} from 'react-native';
import { colors } from '../../../theme/colors';
import ProfileInfoItems from '../../../components/ProfileInfoItems.tsx';
import AppButton from '../../../components/AppButton.tsx';
import BackArrow from '../../../assets/icons/BackArrow';
import { useNavigation } from '@react-navigation/native';

const OtherUserProfile = ({ route }: any) => {
  const navigation = useNavigation();
  const item = route?.params?.item;

  const images = [
    require('../../../assets/images/profileImage.png'),
    require('../../../assets/images/mainImage.png'),
    require('../../../assets/images/guitar.png'),
    require('../../../assets/images/profileImage.png'),
    require('../../../assets/images/mainImage.png'),
    require('../../../assets/images/guitar.png'),
    require('../../../assets/images/profileImage.png'),
  ];

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{ position: 'absolute', left: 8, top: 0 }}
        >
          <BackArrow />
        </Pressable>

        <Image
          style={styles.profileImage}
          source={require('../../../assets/images/profileImage.png')}
        />
        <View style={{ gap: 4 }}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.name}>Guitar</Text>
        </View>
      </View>

      <ScrollView
        style={{ paddingHorizontal: 16 }}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        <View style={{ marginVertical: 24, paddingHorizontal: 18 }}>
          <ProfileInfoItems />
        </View>

        <View>
            <AppButton isRed title={'Follow'} />
        </View>

        <View>
          <TouchableOpacity style={styles.viewResume}>
            <Text style={{color: '#000'}}>View Resume</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 24 }}>
          <Text style={styles.postsTitle}>Posts</Text>

          <FlatList
            data={images}
            keyExtractor={(_, index) => index.toString()}
            numColumns={2}
            scrollEnabled={false}
            contentContainerStyle={{ marginTop: 16, gap: 12 }}
            columnWrapperStyle={{
              justifyContent: 'space-between',
              marginBottom: 12,
            }}
            renderItem={({ item }) => (
              <Image source={item} style={styles.gridImage} />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default OtherUserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
  },
  backgroundImage: {
    width: '100%',
    height: 160,
  },
  contentWrapper: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    paddingHorizontal: 18,
    gap: 18,
    marginTop: 64,
    position: 'relative',
  },
  name: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 100,
    marginLeft: 20,
  },
  postsTitle: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 8,
  },
  gridImage: {
    width: '48%',
    aspectRatio: 1,
    borderRadius: 8,
  },
  back: {
    top: 60,
    left: 16,
  },
  viewResume: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 100,
    marginTop: 12,
    alignSelf: 'flex-start'
  }
});
