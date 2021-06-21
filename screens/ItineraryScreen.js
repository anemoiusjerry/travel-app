import React from 'react';
import { Text, ScrollView } from 'react-native';
import { Button, Card, Paragraph } from 'react-native-paper';

// NOTE switching card use from react-native-element to react-native-paper!!!!

// calendar flow chart screen showing chronologically your events
// this where you add new events
const ItineraryScreen = () => {
    return (
        <ScrollView>
            <Text style={{alignSelf:'center', marginTop:15, fontSize:25, fontWeight:'600'}}>Your Events</Text>
            <Card style={{margin:20}}>
                <Card.Title title='Event Name' subtitle='subtitle'/>
                <Card.Content>
                    <Paragraph>The idea with React Native Elements is more about component structure than actual design.</Paragraph>
                </Card.Content>
            </Card>
        </ScrollView>
    );
}

export default ItineraryScreen;