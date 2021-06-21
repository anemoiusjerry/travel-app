import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import MainStack from '../routes/MainStack';
import AuthContext from '../AuthContext';

const Stack = createStackNavigator();

const AuthStack = () => {
    const [isSignout, setSignout] = useState(false);
    const [userToken, setUserToken] = useState(null);

    const authContext = React.useMemo(
        () => ({
          signIn: async data => {
            setUserToken("dummy-token");
          }
        }),
        []
    );

    return (
        <AuthContext.Provider value={authContext}>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {userToken == null ? (
                // No token found, user isn't signed in
                <Stack.Screen
                    name="SignIn"
                    component={LoginScreen}
                    options={{
                        animationTypeForReplace: isSignout ? 'pop' : 'push',
                    }}
                />
                ) : (
                // User is signed in
                <Stack.Screen name="Main" component={MainStack} />
                )}
            </Stack.Navigator>
        </AuthContext.Provider>
    );
}

export default AuthStack;