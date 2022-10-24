import React, { useState, useEffect } from 'react';
import { Dimensions, Image, Text, TouchableOpacity, ScrollView, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GlobalColours } from '../constants/Colours';
import SharedStyles from '../constants/Styles';
import { getUser } from '../constants/FirebaseAPI';
const SCREEN_WIDTH = Dimensions.get("window").width;

const ProfileScreen = () => {
    const [userInfo, setUserInfo] = useState(init());
    const [age, setAge] = useState();

    // Retrieve user info
    async function init() {
        const data = await getUser("MFfPsLM7QVtUNvljS7DZ");
        setUserInfo(data);

        // Calculate age from timestamp
        var dt = new Date().valueOf() - (data.Birthday.seconds * 1000);
        var ageDate = new Date(dt);
        setAge(Math.abs(ageDate.getUTCFullYear() - 1970));
    }

    return (
        <ScrollView style={styles.userInfoSection}>
            {/* Images carousel */}
            <ScrollView horizontal pagingEnabled style={styles.carousel}>                
                <Image 
                    source={require('../assets/Jerrystock/headshot.jpg')}
                    style={{width:SCREEN_WIDTH-40, height:200, resizeMode:'cover'}}
                    />
                
                <Image 
                    source={require('../assets/womanstock.jpeg')}
                    style={{width:SCREEN_WIDTH-40, height:200, resizeMode:'cover'}}
                    />
            </ScrollView>

            <TouchableOpacity style={styles.editButton}>
                <MaterialCommunityIcons name='pencil' size={30}/>
            </TouchableOpacity>

            <View style={styles.circleContainer}>
                <View style={styles.dot} />
                <View style={styles.dot} />
            </View>

            <View style={styles.infoBoxWrapper}>
                <Text style={styles.title}>{userInfo.Name}</Text>
                <Text style={styles.caption}>{userInfo.Blurb}</Text>
            </View>

            {/* User information segment */}
            <View style={SharedStyles.menuWrapper}>
                <View style={SharedStyles.menuItem}>
                    <MaterialCommunityIcons name='cake-variant' size={25} color={GlobalColours.primary} />
                    <Text style={SharedStyles.menuItemText}>{age}</Text>
                </View>
                <View style={SharedStyles.menuItem}>
                    <MaterialCommunityIcons name='gender-male-female' size={25} color={GlobalColours.primary} />
                    <Text style={SharedStyles.menuItemText}>{userInfo.Gender}</Text>
                </View>
                <View style={SharedStyles.menuItem}>
                    <MaterialCommunityIcons name='earth' size={25} color={GlobalColours.primary} />
                    <Text style={SharedStyles.menuItemText}>{userInfo.Nationality}</Text>
                </View>

                {/* Pad bottom so that items are not hidden by tray */}
                <View style={styles.menuItem}></View>
            </View>
        </ScrollView>
    );
}

styles = StyleSheet.create({
    editButton: {
        alignSelf:'auto', 
        justifyContent:'center', 
        borderRadius:50, 
        margin:10,
        padding:5,
        position: 'absolute',
        backgroundColor: '#fff'
    },
    profileImage: {
        borderRadius: 15
    },
    userInfoSection: {
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: 25
    },
    carousel: {
        width:'100%', 
        height:200, 
        borderRadius:15
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500'
    },
    infoBoxWrapper: {
        marginTop: 20,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'column',
        height: 80
    },
    circleContainer: {
        display: 'flex',
        position: 'absolute',
        height: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    dot: {
        top: 200,
        width: 6,
        height: 6,
        borderRadius: 3,
        margin: 5,
        backgroundColor: '#fff'
    }
});

export default ProfileScreen;
