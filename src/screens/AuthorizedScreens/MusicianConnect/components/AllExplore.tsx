import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from "react-native";
import AppButton from "../../../../components/AppButton.tsx";
import {colors} from "../../../../theme/colors";

const AllExplore = () => {
    const posts = [
        {
            image: require('../../../../assets/images/post1.png'),
            title: 'Ищем гитариста',
            description: 'Присоединяйся к нашей рок-группе из Нью-Йорка. Репетируем дважды в неделю и выступаем раз в месяц.',
        },
        {
            image: require('../../../../assets/images/post2.png'),
            title: 'Барабанщик нужен!',
            description: 'Группа в стиле джаз ищет энергичного барабанщика. Выступления в клубах каждую пятницу.',
        },
        {
            image: require('../../../../assets/images/post3.png'),
            title: 'Вокалистка для кавер-группы',
            description: 'Ищем талантливую вокалистку для каверов на поп-хиты. Пробные выступления на следующей неделе.',
        },
    ];

    const renderItem = ({item}) => (
        <View style={styles.itemContainer}>
            <Image style={styles.image} source={item.image}/>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <AppButton isRed title={'Apply'} />
        </View>
    );

    return (
        <FlatList
            data={posts}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{gap: 18}}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default AllExplore;


const styles = StyleSheet.create({
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

});
