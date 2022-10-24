import React, { useState, useContext } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, Pressable, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextBox from '../components/TextBox';
import wallpaper from '../assets/travel-background.jpg';
import AuthContext from '../AuthContext';

import FirebaseAPI from '../constants/FirebaseAPI';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { signIn } = useContext(AuthContext);

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={wallpaper} style={styles.image}>
                <MaterialCommunityIcons name="lumx" size={120} style={{marginBottom:20}}/>
                <TextBox bgText="Username"/>
                <TextBox bgText="Password" />
                <TouchableOpacity 
                style={styles.button}
                onPress={() => signIn({ username, password })}>
                    <Text style={{color:'#ffffff'}}>Sign in</Text>
                </TouchableOpacity>

                <View style={{flexDirection:'row'}}>
                    <Pressable style={{backgroundColor:'#4267B2', ...styles.socialIcon}}><MaterialCommunityIcons name="facebook" size={50} color='#ffffff'/></Pressable>
                    <Pressable style={{backgroundColor:'#de5246', ...styles.socialIcon}}><MaterialCommunityIcons name="google" size={35} color="#fff"/></Pressable>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#000'
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: 100,
        margin: 20,
        padding: 15,
        alignItems: 'center',
        backgroundColor: '#000000'
    },
    socialIcon: {
        borderRadius: 50,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50, 
        height: 50
    }
});

