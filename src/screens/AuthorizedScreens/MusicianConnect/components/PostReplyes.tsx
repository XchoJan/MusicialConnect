import React from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {colors} from "../../../../theme/colors";

const PostReplyes = () => {
    const responds = [
        {
            image: require('../../../../assets/images/post1.png'),
            title: 'John Legend',
            description: 'Singer, Songwriter',
        },
        {
            image: require('../../../../assets/images/post2.png'),

            title: 'John Legend',
            description: 'Singer, Songwriter',
        },
        {
            image: require('../../../../assets/images/post3.png'),

            title: 'John Legend',
            description: 'Singer, Songwriter',
        },
    ];

    const renderResponds =({item}: any)=> {
        return (
            <TouchableOpacity activeOpacity={0.4} style={styles.responds}>
                <Image source={item.image} style={styles.respondsImage}/>
                <View>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={styles.itemDescription}>{item.description}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={[styles.placeholder, {marginTop: 0}]}>
            <Text style={styles.placeholderText}>Profiles Responded</Text>

            <View style={{width: '100%', marginTop: 12}}>
                <FlatList
                    data={responds}
                    renderItem={renderResponds}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={{gap: 18}}
                    showsVerticalScrollIndicator={false}
                />
            </View>

        </View>
    );
};

export default PostReplyes;


const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: '#fff',
        fontWeight: '500',
        marginBottom: 16,
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.gray,
        padding: 8,
        borderRadius: 12,
        marginBottom: 24,
    },
    tab: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    activeTab: {
        backgroundColor: '#fff',
    },
    tabText: {
        color: '#fff',
        fontWeight: '500',
    },
    activeTabText: {
        color: colors.black,
    },
    itemContainer: {
        width: '100%',
        backgroundColor: colors.gray,
        borderRadius: 16,
        padding: 16,
        gap: 12
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 16
    },
    itemTitle: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '500'
    },
    itemDescription: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '400'
    },
    placeholder: {
        marginTop: 32,
        alignItems: 'center',
    },
    placeholderText: {
        color: '#aaa',
        fontSize: 16
    },
    responds:{
        width: '100%',
        height: 80,
        backgroundColor: colors.gray,
        alignItems: 'center',
        paddingHorizontal: 16,
        borderRadius: 16,
        flexDirection: 'row',
        gap: 18
    },
    respondsImage:{
        width: 60,
        height: 60,
        borderRadius: 100
    },
    addImageBox:{
        width: 100,
        height: 100,
        backgroundColor: colors.gray,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16
    },
    addImageText:{
        fontSize: 50,
        color: '#fff',
        fontWeight: '200'
    }
});
