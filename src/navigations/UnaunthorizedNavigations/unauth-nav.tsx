import {createStackNavigator} from '@react-navigation/stack';

let Stack = createStackNavigator();

import WelcomeScreen from "../../screens/UnathorizedScreens/WelcomeScreen/welcome-screen.tsx";
import RegistrationScreen from "../../screens/UnathorizedScreens/RegistrationScreen/registration-screen.tsx";

const UnauthorizedNavigations = () => {
    return (
        <Stack.Navigator
            initialRouteName={'WelcomeScreen'}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
        </Stack.Navigator>
    );
};

export default UnauthorizedNavigations;
