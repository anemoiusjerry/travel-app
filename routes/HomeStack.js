import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import MapScreen from '../screens/MapScreen';
import ItineraryScreen from '../screens/ItineraryScreen';
import NewEvent from '../modals/NewEvent';
import { GlobalColours } from '../constants/Colours';

const Stack = createStackNavigator();

// Home screen shows your events in either map view or calendar view
const HomeStack = () => {
    const [currentView, setCurrentView] = useState("MapView");
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();

    // Handles swapping between home screen views
    _handleHomeViewChange = () => {
        if (currentView == 'MapView') {
            navigation.navigate('CalendarView');
            setCurrentView('CalendarView');
        }
        else {
            navigation.navigate('MapView');
            setCurrentView('MapView');
        }
    };

    // Pop up modal
    _handleItineraryPopUp = () => {
        setModalVisible(true);
    }

    return (
        <View style={{flex:1}}>
            <Stack.Navigator screenOptions={{headerShown: false, gestureEnabled: false}}>
                <Stack.Screen name="MapView" component={MapScreen} />
                <Stack.Screen name="CalendarView" component={ItineraryScreen} />
            </Stack.Navigator>
            
            {/* Add new itinerary item */}
            <TouchableOpacity 
                style={{position:'absolute', alignSelf:'flex-start'}}
                onPress={_handleItineraryPopUp}>
                <MaterialCommunityIcons name="plus" size={50} color={GlobalColours.primary} />
            </TouchableOpacity>

            {/* Switch to calendar screen */}
            <TouchableOpacity 
                style={{position:'absolute', alignSelf:'flex-end'}}
                onPress={_handleHomeViewChange}>
                <MaterialCommunityIcons name={currentView=='MapView' ? 'calendar' : 'map'} size={50} color={GlobalColours.primary} />
            </TouchableOpacity>

            <NewEvent setModal={setModalVisible} modalState={modalVisible}/>
        </View>
    );
}

export default HomeStack;

const styles = StyleSheet.create({
    Map: {
        flex: 1
    },
    Bubble: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 6,
        borderRadius: 6,
        borderColor: '#ccc',
        borderWidth: 0.5,
        padding: 15,
        width: 150
    },
    // Arrow below the bubble
    arrow: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#fff',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -32,
    },
    arrowBorder: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#007a87',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -0.5,
        // marginBottom: -15
    },
    Marker: {
        width: 50,
        height: 50
    },
    HeadBubble: {
        width: 70,
        height: 70,
        borderRadius: 70/2
    }
});