import React from 'react';
import AppContainer from '../../../components/AppContainer.tsx';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import {colors} from "../../../theme/colors";

const MainNotificationsScreen = () => {
  const notifications = [
    {
      id: 1,
      image: require('../../../assets/images/profileImage.png'),
      text: 'Jamie uploaded a clip of their band rehearsal.',
      date: 'July 30, 2025',
    },
    {
      id: 2,
      image: require('../../../assets/images/mainImage.png'),
      text: 'Taylor added a new song to their profile.',
      date: 'July 28, 2025',
    },
    {
      id: 3,
      image: require('../../../assets/images/guitar.png'),
      text: 'Alex shared a photo from their recent gig.',
      date: 'July 27, 2025',
    },
    {
      id: 4,
      image: require('../../../assets/images/mainImage.png'),
      text: 'Sam joined a new band as a drummer.',
      date: 'July 25, 2025',
    },
    {
      id: 5,
      image: require('../../../assets/images/profileImage.png'),
      text: 'Morgan liked your latest post.',
      date: 'July 24, 2025',
    },
  ];

  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.itemContainer}>
        <Image style={styles.image} source={item.image}/>
        <View style={{gap: 4}}>
          <Text style={styles.text}>
            {item.text}
          </Text>
          <Text style={styles.text}>
            {item.date}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <AppContainer scrollable>
      <View style={styles.container}>
        <Text style={styles.title}>Notifications</Text>
      </View>
      <View style={styles.flContainer}>
        <FlatList
            renderItem={renderItem}
            data={notifications}
            contentContainerStyle={{gap: 18}}
        />
      </View>
    </AppContainer>
  );
};

export default MainNotificationsScreen;

const styles = StyleSheet.create({
  container: {
    marginBottom: 24
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '500',
  },
  flContainer: {
    flex: 1,
    backgroundColor: colors.gray,
    marginBottom: 24,
    borderRadius: 25,
    padding: 14
  },
  image:{
    width: 80,
    height: 80,
    borderRadius: 100
  },
  itemContainer:{
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  text:{ color: '#fff', fontSize: 16, width: '68%' }
});
