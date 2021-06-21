import React from 'react';
import { Dimensions, Image, Text, TouchableOpacity, ScrollView, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GlobalColours } from '../constants/Colours';
import SharedStyles from '../constants/Styles';
const SCREEN_WIDTH = Dimensions.get("window").width;

const ProfileScreen = () => {
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
                <Text style={styles.title}>Jerry Liu</Text>
                <Text style={styles.caption}>Pellentesque nisi lorem, tincidunt quis ligula non, ultricies interdum sapien.</Text>
            </View>

            {/* User information segment */}
            <View style={SharedStyles.menuWrapper}>
                <View style={SharedStyles.menuItem}>
                    <MaterialCommunityIcons name='cake-variant' size={25} color={GlobalColours.primary} />
                    <Text style={SharedStyles.menuItemText}>Age</Text>
                </View>
                <View style={SharedStyles.menuItem}>
                    <MaterialCommunityIcons name='gender-male-female' size={25} color={GlobalColours.primary} />
                    <Text style={SharedStyles.menuItemText}>Gender</Text>
                </View>
                <View style={SharedStyles.menuItem}>
                    <MaterialCommunityIcons name='earth' size={25} color={GlobalColours.primary} />
                    <Text style={SharedStyles.menuItemText}>Nationality</Text>
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
