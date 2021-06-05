import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';

const HomePage = () => {
    // Current user location
    const [location, setLocation] = useState(null);
    const [ mapRegion, setRegion ] = useState( null )
    const [errorMsg, setErrorMsg] = useState(null);

    // Use expo Location service to get current user location
    useEffect(() => {
        (async () => {
            // Ask for permission
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({});
            setLocation(JSON.stringify({latitude, longitude}));
            // Center the map on the location we just fetched.
            setRegion( { latitude, longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 } );
        })();
    }, []);

    // Sets new coordinates
    _handleMapRegionChange = mapRegion => {
        setRegion(mapRegion);
    };

    if (location == null) {
        return <Text>Finding your current location...</Text>
    }

    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.Map}
            showsUserLocation={true}
            region={mapRegion}
            onRegionChangeComplete={_handleMapRegionChange}
        ></MapView>
    );
}

export default HomePage;

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