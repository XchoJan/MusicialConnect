import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

let Stack = createStackNavigator();
import MainScreen from '../../screens/AuthorizedScreens/MainScreens/main-screen.tsx'
import OtherUserProfile from "../../screens/AuthorizedScreens/MainScreens/other-user-profile.tsx";
export default function MainNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="MainScreen"
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
            <Stack.Screen name="MainScreen" component={MainScreen} />
            <Stack.Screen name="OtherUserProfile" component={OtherUserProfile} />
        </Stack.Navigator>
    );
}
