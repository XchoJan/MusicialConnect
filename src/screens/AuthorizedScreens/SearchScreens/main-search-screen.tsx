import React from 'react';
import AppContainer from '../../../components/AppContainer.tsx';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { colors } from '../../../theme/colors';

const width = Dimensions.get('window').width;

const MainSearchScreen = () => {
  const images = [
    require('../../../assets/images/profileImage.png'),
    require('../../../assets/images/mainImage.png'),
    require('../../../assets/images/guitar.png'),
    require('../../../assets/images/profileImage.png'),
    require('../../../assets/images/mainImage.png'),
    require('../../../assets/images/guitar.png'),
    require('../../../assets/images/profileImage.png'),
    require('../../../assets/images/profileImage.png'),
    require('../../../assets/images/mainImage.png'),
    require('../../../assets/images/guitar.png'),
    require('../../../assets/images/profileImage.png'),
    require('../../../assets/images/mainImage.png'),
    require('../../../assets/images/guitar.png'),
    require('../../../assets/images/profileImage.png'),
    require('../../../assets/images/profileImage.png'),
    require('../../../assets/images/mainImage.png'),
    require('../../../assets/images/guitar.png'),
    require('../../../assets/images/profileImage.png'),
    require('../../../assets/images/mainImage.png'),
    require('../../../assets/images/guitar.png'),
    require('../../../assets/images/profileImage.png'),
    require('../../../assets/images/profileImage.png'),
    require('../../../assets/images/profileImage.png'),
    require('../../../assets/images/mainImage.png'),
    require('../../../assets/images/guitar.png'),
    require('../../../assets/images/profileImage.png'),
    require('../../../assets/images/mainImage.png'),
    require('../../../assets/images/profileImage.png'),
  ];

  const renderItem = ({ item }: any) => {
    return (
      <View>
        <Image style={styles.image} source={item} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recomendations</Text>
      <View>
        <FlatList
          data={images}
          renderItem={renderItem}
          numColumns={3}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
        />
      </View>
    </View>
  );
};

export default MainSearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    paddingTop: 64,
    paddingBottom: 48,
  },
  image: {
    width: width / 3 - 6,
    height: 100,
    margin: 2,
  },
  title:{
    fontSize: 24,
    color: '#fff',
    fontWeight: '500',
    marginBottom: 18,
    marginLeft: 14
  }
});
