import React from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GlobalColours } from '../constants/Colours';
import SharedStyles from '../constants/Styles';

const SettingsScreen = () => {
    return (
        <ScrollView style={{marginHorizontal: 10, ...SharedStyles.menuWrapper}}>
            <TouchableOpacity style={SharedStyles.menuItem}>
                <MaterialCommunityIcons name='map-marker' size={25} color={GlobalColours.primary}/>
                <Text style={SharedStyles.menuItemText}>Location Sharing</Text>
            </TouchableOpacity>
            <TouchableOpacity style={SharedStyles.menuItem}>
                <MaterialCommunityIcons name='bell' size={25} color={GlobalColours.primary} />
                <Text style={SharedStyles.menuItemText}>Notifications</Text>
            </TouchableOpacity>
            <TouchableOpacity style={SharedStyles.menuItem}>
                <MaterialCommunityIcons name='key' size={25} color={GlobalColours.primary} />
                <Text style={SharedStyles.menuItemText}>Password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={SharedStyles.menuItem}>
                <MaterialCommunityIcons name='logout' size={25} color={GlobalColours.primary} />
                <Text style={SharedStyles.menuItemText}>Sign Out</Text>
            </TouchableOpacity>
            <TouchableOpacity style={SharedStyles.menuItem}>
                <MaterialCommunityIcons name='trash-can' size={25} color={GlobalColours.primary} />
                <Text style={SharedStyles.menuItemText}>Delete Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={SharedStyles.menuItem}>
                <MaterialCommunityIcons name='information-outline' size={25} color={GlobalColours.primary} />
                <Text style={SharedStyles.menuItemText}>About</Text>
            </TouchableOpacity>
            <View style={SharedStyles.menuItem}></View>
        </ScrollView>
    );
}

export default SettingsScreen;