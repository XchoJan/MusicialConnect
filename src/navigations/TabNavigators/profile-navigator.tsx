import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

let Stack = createStackNavigator();

import EditProfileScreen from "../../screens/AuthorizedScreens/ProfileScreens/edit-profile-screen.tsx";
import ProfileScreen from "../../screens/AuthorizedScreens/ProfileScreens/profile-screen.tsx";
export default function ProfileNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="ProfileScreen"
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
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
        </Stack.Navigator>
    );
}
