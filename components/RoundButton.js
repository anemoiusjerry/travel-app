import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import SharedStyles from '../constants/Styles';
import { GlobalColours } from '../constants/Colours';

const RoundButton = ({onPress}) => {
    return (
        <TouchableOpacity 
        style={{...styles.container, ...SharedStyles.Shadow}}
        onPress={onPress}>
            <View style={styles.button}>
                <MaterialCommunityIcons name="circle-expand" color='#fff' size={30}/>
            </View>
        </TouchableOpacity>
    );
}

export default RoundButton;

const styles = StyleSheet.create({
    container: {
        position: 'relative', 
        alignItems:'center',
        width: 60
    },
    button: {
        top: -20,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 35,
        backgroundColor:GlobalColours.primary
    }
});