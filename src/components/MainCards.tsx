import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {colors} from "../theme/colors";
import HearthIcon from "../assets/icons/HearthIcon";
import CommentIcon from "../assets/icons/CommentIcon";
import ShareIcon from "../assets/icons/ShareIcon";
import {useNavigation} from "@react-navigation/native";

const MainCards = ({item}: any) => {
    const navigation = useNavigation<any>()

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={()=> navigation.navigate('OtherUserProfile', {item: item})}
                activeOpacity={0.4}
                style={styles.nameImageBox}
            >
                <Image
                    style={styles.userImage}
                    source={item.profileImage}
                />
                <Text style={styles.userName}>
                    {item.name}
                </Text>
            </TouchableOpacity>

            <View>
                <Image
                    style={styles.postImage}
                    source={item.image}
                    resizeMode='repeat'
                />
            </View>

            <View style={styles.reactionsBox}>
                <TouchableOpacity activeOpacity={0.4}>
                    <HearthIcon/>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.4}>
                    <CommentIcon/>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.4}>
                    <ShareIcon/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default MainCards;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 360,
        backgroundColor: colors.gray,
        borderRadius: 24,
        padding: 16,
        gap: 18
    },
    userName:{
        color: '#fff',
        fontWeight: '500',
        fontSize: 18
    },
    userImage:{
        width: 60,
        height: 60,
        borderRadius: 100
    },
    postImage:{
        width: '100%',
        height: 200,
        borderRadius: 24,
    },
    nameImageBox:{
        flexDirection: 'row',
        gap: 14,
        alignItems: 'center'
    },
    reactionsBox:{
        flexDirection: 'row',
        gap: 28
    },
})
