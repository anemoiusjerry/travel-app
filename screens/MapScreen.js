import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, Image, Text, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { GlobalColours } from '../constants/Colours';
import { getAllEvents } from '../constants/FirebaseAPI';

const MapScreen = () => {
    // Current user location
    const [location, setLocation] = useState(null);
    const [ mapRegion, setRegion ] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [events, setEvents] = useState(init());
    
    async function init() {
        let events = await getAllEvents("MFfPsLM7QVtUNvljS7DZ");
        //console.log(events);
        setEvents(events);
    }

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
    const _handleMapRegionChange = mapRegion => {
        setRegion(mapRegion);
    };

    if (location == null) {
        return (
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text>Finding your current location...</Text>
                <ActivityIndicator style={{marginTop:5}}/>
            </View>);
    };

    // Retrieve events from Firestore and create map markers
    let eventComponents = events.map(({id, data}) => (
        <Marker
        key={id}
        coordinate={{
            latitude: data.Latitude,
            longitude: data.Longitude
        }}
        >
            <MaterialCommunityIcons name={'map-marker'} size={50} color={GlobalColours.primary} />

            <Callout tooltip>
                <View>
                    <View style={styles.Bubble}>
                        <Text style={{fontWeight:'600', fontSize:18}}>{data.Name}</Text>
                        <Text style={{color:'#474747', marginBottom:10}}>{data.StartTime.toDateString()}</Text>

                        <View style={{alignSelf:'flex-end', justifyContent:'center', flexDirection:'row'}}>
                            <View style={{marginLeft:-60}}><Image style={styles.HeadBubble} source={require('../assets/womanstock.jpeg')}/></View>
                            <View style={{marginLeft:-60}}><Image style={styles.HeadBubble} source={require('../assets/womanstock.jpeg')}/></View>
                        </View>
                    </View>
                    <View style={styles.arrowBorder}></View>
                    <View style={styles.arrow}></View>
                </View>
            </Callout>
        </Marker>
    ));

    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.Map}
            showsUserLocation={true}
            initialRegion={mapRegion}
            onRegionChange={_handleMapRegionChange}
        >
           {eventComponents}
        </MapView>
    );
}

export default MapScreen;

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
        width: 200
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
        borderRadius: 70/2,
        borderColor:'#fff',
        borderWidth:1
    }
});