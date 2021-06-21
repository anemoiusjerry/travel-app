import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Own imports
import HomeScreen from './HomeStack';
import MessagingScreen from '../screens/MessagingScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SharedStyles from '../constants/Styles';
import RoundButton from '../components/RoundButton';
import MatchPopUp from '../modals/MatchPopUp';
import { GlobalColours } from '../constants/Colours';

const Tab = createBottomTabNavigator();

// Main landing page with map view. Navigate around with a bottom taskbar
const MainStack = () => {
    const [matchModalVisible, setMatchModalVisible] = useState(false);
    _handleModalClose = () => {
        setMatchModalVisible(false);
    }

    return (
        <SafeAreaView style={{flex:1, backgroundColor:'#000'}}>
            <Tab.Navigator 
                tabBarOptions={{
                    activeTintColor: GlobalColours.primary,
                    style: {...styles.BottomTab, ...SharedStyles.Shadow}
                }}>
                <Tab.Screen name="Home" component={HomeScreen} 
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        )
                    }}/>

                <Tab.Screen name="Messages" component={MessagingScreen} 
                    options={{
                        tabBarLabel: 'Messages',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="chat" color={color} size={size} />
                        )
                    }}/>

                <Tab.Screen name="Match" children={()=><MatchPopUp/>}
                    options={{
                        tabBarButton: (props) => (
                            <RoundButton {...props}/>
                        )                     
                    }}
                    listeners={()=>({
                        tabPress: event => {
                            event.preventDefault();
                            setMatchModalVisible(true);
                            setTimeout(() => {setMatchModalVisible(false)}, 3000);
                        }
                    })}
                />

                <Tab.Screen name="Profile" component={ProfileScreen}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="account" color={color} size={size} />
                        )
                    }}
                />

                <Tab.Screen name="Settings" component={SettingsScreen}
                    options={{
                        tabBarLabel: 'Settings',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="cog" color={color} size={size} />
                        )
                    }}
                />
            </Tab.Navigator>

            <MatchPopUp matchModalState={matchModalVisible}/>
        </SafeAreaView>
        
    );
}

export default MainStack;

const styles = StyleSheet.create({
    BottomTab: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 50
    }
});