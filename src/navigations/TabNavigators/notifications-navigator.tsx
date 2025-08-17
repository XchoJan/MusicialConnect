import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

let Stack = createStackNavigator();
import MainNotificationsScreen
    from "../../screens/AuthorizedScreens/NotificationsScreens/main-notifications-screen.tsx";

export default function NotificationsNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="MainNotificationsScreen"
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
            <Stack.Screen name="MainNotificationsScreen" component={MainNotificationsScreen} />
        </Stack.Navigator>
    );
}
