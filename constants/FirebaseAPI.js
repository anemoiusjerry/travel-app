import * as firebase from 'firebase';
import 'firebase/firestore';

// Initiase connection
const firebaseConfig = {
    authDomain: 'travel-app-firestore.firebaseapp.com',
    databaseURL: 'https://travel-app-firestore.firebaseio.com',
    projectId: 'travel-app-firestore',
    storageBucket: 'travel-app-firestore.appspot.com',
    messagingSenderId: '570845994072'
}

// Check for initialisation
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }
const FirebaseAPI = firebase.firestore();

// Returns user data for a given user ID from Cloud Firestore
export const getUser = async (userID) => {
    let userData = await FirebaseAPI.collection('users').doc(userID).get();
    return userData.data();
}
// Returns all events for a given user ID
export const getAllEvents = async (userID) => {
    let allEvents = await FirebaseAPI
                            .collection('users').doc(userID)
                            .collection('events').get();

    allEvents = allEvents.docs.map(d => ({
        id: d.id, 
        data: d.data()
    }));
    
    // Convert time objects to date objects
    for (let i=0; i<allEvents.length; i++) {
        let startTime = allEvents[i].data.StartTime;
        allEvents[i].data.StartTime = new Date(startTime.seconds * 1000 + startTime.nanoseconds);
        let endTime = allEvents[i].data.EndTime;
        allEvents[i].data.EndTime = new Date(endTime.seconds * 1000 + endTime.nanoseconds);
    }
    return allEvents;
}

export const addEvent = (userID, event) => {
    firestore().collection('users')
        .doc(userID)
        .collection('events')
        .add({
            Name: event.name,
            Latitude: event.latitude,
            Longitude: event.longitude,
            StartTime: event.startTime,
            EndTime: event.endTime
        });
}