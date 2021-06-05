import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

const TextBox = props => {
    const [text, setText] = React.useState("");

    return (
        <View>
            <TextInput 
            style={styles.slot}
            placeholder={props.bgText}/>
        </View>
    );
}

export default TextBox;

const styles = StyleSheet.create({
    slot: {
        height: 40,
        width: 300,
        padding: 10,
        margin: 5,
        borderWidth: 2,
        borderRadius: 30,
        borderColor: '#000000',
        backgroundColor: '#FFFFFF'
    }
});