import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './routes/AuthStack';

export default function App() {
    return (
        // Constrains app below the header bar
        <SafeAreaProvider style={{flex:1, backgroundColor:'#000'}}>
            <NavigationContainer>
                <AuthStack/>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}