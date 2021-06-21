import React from 'react';
import { ActivityIndicator, Modal, StyleSheet, Text, View } from 'react-native';

const MatchPopUp = props => {
    return (
        <View style={styles.centeredView}>
            <Modal
            animationType='slide'
            transparent={true}
            visible={props.matchModalState}>
                <View style={{flex:1, ...styles.centeredView}}>
                    <View style={styles.modalView}>
                        <Text>Findinging other travellers!</Text>
                        <ActivityIndicator style={{marginTop:5}}/>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default MatchPopUp

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
});