import React, { useState, Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import LoginPage from '../screens/LoginPage';
import HomePage from '../screens/HomePage';
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
        <NavigationContainer>
            <AuthContext.Provider value={authContext}>
                <Stack.Navigator>
                    {userToken == null ? (
                    // No token found, user isn't signed in
                    <Stack.Screen
                        name="SignIn"
                        component={LoginPage}
                        options={{
                        title: 'Sign in',
                        animationTypeForReplace: isSignout ? 'pop' : 'push',
                        }}
                    />
                    ) : (
                    // User is signed in
                    <Stack.Screen name="Home" component={HomePage} />
                    )}
                </Stack.Navigator>
            </AuthContext.Provider>
        </NavigationContainer>
    );
}

export default AuthStack;