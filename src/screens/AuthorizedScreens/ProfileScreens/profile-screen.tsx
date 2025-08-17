import React from 'react';
import AppContainer from "../../../components/AppContainer.tsx";
import {View, Text, StyleSheet, Image, FlatList, Pressable} from "react-native";
import {useSelector} from "react-redux";
import {colors} from "../../../theme/colors";
import ProfileInfoItems from "../../../components/ProfileInfoItems.tsx";
import EditIcon from "../../../assets/icons/EditIcon";
import {useNavigation} from "@react-navigation/native";
import {UserType} from "../../../types/userDataTypes.tsx";

const ProfileScreen = () => {
    const navigation = useNavigation<any>();
    const userData: UserType = useSelector((store: any) => store.userData.userData);

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
      <AppContainer scrollable>
        <View style={styles.header}>
          <Image
            source={{
              uri: 'https://musicialconnect.com/' + userData.avatarUrl,
            }}
            style={styles.image}
          />
          <Text style={{ fontSize: 18, color: '#fff' }}>
              {userData.firstName
                  ? userData.firstName
                  : 'user_' + (userData?._id?.slice(0, 4) || '')}
          </Text>

          <Pressable
            onPress={() => navigation.navigate('EditProfileScreen')}
            style={styles.editIcon}
          >
            <EditIcon />
          </Pressable>
        </View>

        <View style={{ marginVertical: 24, paddingHorizontal: 18 }}>
          <ProfileInfoItems />
        </View>

        <View style={{ marginTop: 24, marginBottom: 220 }}>
          <Text style={styles.postsTitle}>Posts</Text>

          <FlatList
            data={images}
            keyExtractor={(_, index) => index.toString()}
            numColumns={2}
            scrollEnabled={true}
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
      </AppContainer>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 100,
        borderRadius: 12,
        flexDirection: 'row',
        backgroundColor: colors.gray,
        alignItems: 'center',
        gap: 8,
        paddingHorizontal: 12
    },
    image:{
        width: 80,
        height: 80,
        borderRadius: 100
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
    editIcon:{
        right: 14,
        position: 'absolute'
    }
})

