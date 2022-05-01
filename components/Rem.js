import React from 'react';
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { withFirebaseHOC } from '../config/Firebase'
// import { date } from 'yup';
// import { date } from 'yup';
const Rem = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
                {/* <Text style={styles.timetitle}>{date.toTimeString()}</Text> */}
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,

    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: "center",
        flexWrap: 'wrap'
    },
    timetitle: {
        maxWidth: '80%'
      },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#5CFF5C',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%'
    },
    
})

export default withFirebaseHOC(Rem)