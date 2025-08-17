import React from 'react';
import {StyleSheet, View} from "react-native";
import {colors} from "../theme/colors";

const AppContainer = ({children, scrollable}: any) => {
    return (
        <View style={!scrollable ? styles.container : styles.scrollableContainer}>
            {children}
        </View>
    );
};

export default AppContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        width: '100%',
    },
    scrollableContainer: {
        flex: 1,
        backgroundColor: colors.black,
        paddingHorizontal: 16,
        width: '100%',
        paddingTop: 64
    },
})
