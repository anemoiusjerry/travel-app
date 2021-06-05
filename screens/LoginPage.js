import React from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import TextBox from '../components/TextBox';
import wallpaper from '../assets/travel-background.jpg';
import AuthContext from '../AuthContext';

const LoginPage = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const { signIn } = React.useContext(AuthContext);

    return (
        <View style={styles.container}>
            <ImageBackground source={wallpaper} style={styles.image}>
                <TextBox bgText="Username"/>
                <TextBox bgText="Password" />
                <TouchableOpacity 
                style={styles.button}
                onPress={() => signIn({ username, password })}>
                    <Text style={{color:'#ffffff'}}>Sign in</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
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
  }
});

