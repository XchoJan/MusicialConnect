import React from 'react';
import AppContainer from '../../../components/AppContainer.tsx';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MainCards from '../../../components/MainCards.tsx';
import MusicleFilters from '../../../components/MusicleFilters.tsx';
import SearchIcon from "../../../assets/icons/SearchIcon";
import {colors} from "../../../theme/colors";

const MainScreen = () => {
  const data = [
    {
      image: require('../../../assets/images/mainImage.png'),
      description: 'Just finished an amazing set with my new acoustic guitar!',
      name: 'Alex Johnson',
      profileImage: require('../../../assets/images/profileImage.png'),
      id: 1,
    },
    {
      image: require('../../../assets/images/mainImage.png'),
      description: 'Just finished an amazing set with my new acoustic guitar!',
      name: 'Jason Statham',
      profileImage: require('../../../assets/images/profileImage.png'),
      id: 2,
    },
    {
      image: require('../../../assets/images/mainImage.png'),
      description: 'Just finished an amazing set with my new acoustic guitar!',
      name: 'Bruse Lee',
      profileImage: require('../../../assets/images/profileImage.png'),
      id: 3,
    },
  ];

  const renderItem = ({ item }: any) => {
    return <MainCards item={item} />;
  };

  return (
    <AppContainer scrollable={true}>
      <View style={{ width: '100%', paddingBottom: 80 }}>
        <View style={styles.header}>
          <MusicleFilters />
          <TouchableOpacity style={styles.searchBox}>
            <SearchIcon/>
          </TouchableOpacity>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={renderItem}
          contentContainerStyle={{ gap: 18 }}
        />
      </View>
    </AppContainer>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  header:{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'},
  searchBox: {backgroundColor: colors.red, padding: 8, borderRadius: 100}
})
