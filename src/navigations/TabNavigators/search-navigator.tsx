import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

let Stack = createStackNavigator();

import MainSearchScreen from "../../screens/AuthorizedScreens/SearchScreens/main-search-screen.tsx";
export default function SearchNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="MainSearchScreen"
            screenOptions={{
                headerShown: false,
                gestureEnabled: false,
                animation: 'fade_from_bottom',
                transitionSpec: {
                    open: {
                        animation: 'timing',
                        config: {
                            duration: 100,
                        },
                    },
                    close: {
                        animation: 'timing',
                        config: {
                            duration: 100,
                        },
                    },
                },
            }}
        >
            <Stack.Screen name="MainSearchScreen" component={MainSearchScreen} />
        </Stack.Navigator>
    );
}
