import React from 'react';
import {View, Text, StyleSheet} from "react-native";

const ProfileInfoItems = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>
                    18
                </Text>
                <Text style={styles.description}>
                    Posts
                </Text>
            </View>
            <View>
                <Text style={styles.title}>
                    18
                </Text>
                <Text style={styles.description}>
                    Followers
                </Text>
            </View>
            <View>
                <Text style={styles.title}>
                    18
                </Text>
                <Text style={styles.description}>
                    Following
                </Text>
            </View>

        </View>
    );
};

export default ProfileInfoItems;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    title:{
        fontSize: 18,
        color: '#fff',
        fontWeight: '500',
        textAlign: 'center'

    },
    description:{
        fontSize: 17,
        color: '#fff',
        fontWeight: '400',
    }
})
