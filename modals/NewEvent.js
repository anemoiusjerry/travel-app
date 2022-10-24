import React, { useState } from "react";
import { Modal, StyleSheet, Text, TextInput, Pressable, View } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { GlobalColours } from "../constants/Colours";

const NewEvent = props => {
    const [name, setName] = useState();
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const [datetime, setDatetime] = useState(new Date())

    return (
    <View style={styles.centeredView}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalState}
        onRequestClose={() => {
            props.setModal(!props.modalState);
        }}
        >
            <View style={{flex:1, ...styles.centeredView}}>
                <View style={styles.modalView}>
                    <TextInput 
                        style={styles.modalText} 
                        placeholder={"Event Title"} 
                        placeholderTextColor={GlobalColours.grey} 
                        onChangeText={}/>
                    <TextInput style={styles.modalText} placeholder={"Location"} placeholderTextColor={GlobalColours.grey} />

                    <View style={{flexDirection:'row'}}>
                        <DateTimePicker
                        testID="dateTimePicker"
                        display="default"
                        value={datetime}
                        style={{marginBottom:15, flex:1}}
                        />

                        <DateTimePicker
                        testID="dateTimePicker"
                        display="default"
                        value={datetime}
                        mode={'time'}
                        style={{marginBottom:15, flex:1 }}
                        />
                    </View>

                    <TextInput style={styles.modalText} placeholder={"Event Provider (optional)"} placeholderTextColor={"#808080"}/>
                    <TextInput style={styles.modalText} placeholder={"Tags (optional)"} placeholderTextColor={"#808080"} />

                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Pressable
                            style={styles.button}
                        >
                            <Text style={styles.textStyle}>Add</Text>
                        </Pressable>
                        <Pressable
                            style={styles.button}
                            onPress={() => props.setModal(!props.modalState)}
                        >
                            <Text style={styles.textStyle}>Cancel</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        justifyContent: "center",
        alignItems: "center"
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        marginHorizontal: 5,
        elevation: 2,
        width: 100,
        backgroundColor: GlobalColours.primary
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'left',
        borderWidth: 1,
        borderRadius: 15,
        height: 30,
        paddingLeft: 10
    }
});

export default NewEvent;