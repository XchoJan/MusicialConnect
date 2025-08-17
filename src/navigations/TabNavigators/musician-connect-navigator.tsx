import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

let Stack = createStackNavigator();

import MusicianConnect from "../../screens/AuthorizedScreens/MusicianConnect/musician-connect.tsx";
export default function MusicianConnectNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="MusicianConnect"
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
            <Stack.Screen name="MusicianConnect" component={MusicianConnect} />
        </Stack.Navigator>
    );
}
