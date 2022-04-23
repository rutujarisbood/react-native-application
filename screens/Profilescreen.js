import React, { useState, Component, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Form, Row, Col,Button, InputGroup, Text, View, Dimensions, FlatList, Modal, ScrollView, TouchableOpacity, Linking, Image } from 'react-native';
import { colors } from '../constants/theme';
import { Ionicons } from '@expo/vector-icons';
//import { LinearGradient } from 'expo-linear-gradient';
import LinearGradient from 'react-native-linear-gradient';
import Users from '../model/users';
import { withFirebaseHOC } from '../config/Firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomNavigator from './BottomNavigator';
var x = {}; var value;

class ProfileScreen extends Component {
    state = {
        isLoading: true,
        imgURL: '../assets/profilePic.png'
    };

    handleOnclick = async (pagename) => {
        try {
            //await this.props.firebase.signOut()
            //(`${page}`)
            this.props.navigation.navigate(pagename)
        } catch (error) {
            console.log(error)
        }
    }
    handleSignout = async () => {
        try {
            await this.props.firebase.signOut()
            //this.props.navigation.navigate('Login')
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount() {

        try {
            //return JSON.parse(await AsyncStorage.getItem("userDetails"))
            AsyncStorage.getItem('userDetails').then((value) => {
                console.log("999999 : " + value);
                var yy = JSON.parse(value);
                console.log("777777 : " + typeof (yy));
                console.log("888888 : " + yy.uid);
                if (yy !== null && yy !== undefined) {

                    //console.log("9096 : "+yy.email);
                    x = yy.user;
                    //console.log("666666 : "+typeof(x));
                    //return value;
                    this.setState({
                        isLoading: false
                    });
                }

            });
            //value != null ? JSON.parse(value) : null;

        } catch (e) {
            // error reading value
            //console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ : "+e.message)
        }
    }
    render() {
        //console.log("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO :"+this.state.isLoading);
        if (this.state.isLoading) {
            return <View><Text>Loading...</Text></View>;
        }
        //getUser()
        //var x=AsyncStorage.getItem('userDetails');
        console.log("*********%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% : " + x)
        return (
            <>
                <SafeAreaView style={styleSheet.MainContainer}>
                    <View  >
                        {/* <LinearGradient colors={['#704a96', '#8360a6', '#a681cc', '#cfa5fa', '#e1d0f2', '#ece6f2']} > */}
                        <View style={{ backgroundColor: '#000', height: '100%' }}>
                            <Image
                                source={require('../assets/profilePic.png')}
                                //source={{ uri: this.state.imgURL}}
                                style={{ width: 100, height: 100, alignSelf: 'center', marginTop: 20, marginBottom: 20, borderRadius: 50 }}
                            />
                            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginBottom: 50, marginBottom: 10 }} >Rutuja</Text>
                            <View style={{ justifyContent: 'flex-start', flexDirection: 'row', marginStart: 10, marginBottom: 20, marginTop: 60 }}>
                                <Ionicons name='location-outline' size={20} color={colors.black} />
                                <Text style={{ fontWeight: '700' }}>About : </Text>
                            </View>
                            <View style={{ justifyContent: 'flex-start', flexDirection: 'row', marginStart: 10, marginBottom: 20 }}>
                                <Ionicons name='location-outline' size={20} color={colors.black} />
                                <Text style={{ fontWeight: '700' }}>Email : {x.providerData[0].email}</Text>
                            </View>
                            <View style={{ justifyContent: 'flex-start', flexDirection: 'row', marginStart: 10, marginBottom: 20 }}>
                                <Ionicons name='location-outline' size={20} color={colors.black} />
                                <Text style={{ fontWeight: '700' }}>ProviderId :{x.providerData[0].providerId} </Text>
                            </View>
                            {/* <Button
                            
                            title="PrivacyPolicy"
                            //buttonStyle={{ borderColor: buttonColor, borderRadius: 20 }}
                            //titleStyle={{ color: buttonColor }}
                            onPress={() => this.handleOnclick('PrivacyPolicy')}
                        /> */}
                        </View>
                        
                        <BottomNavigator navigation={this.props.navigation} />

                        {/* </LinearGradient> */}
                    </View>
                </SafeAreaView>
            </>
        );
    }
};

export default withFirebaseHOC(ProfileScreen);

const styleSheet = StyleSheet.create({
    container: {
        flex: 1,
    },
    bottomNavView: {
        height: 35, justifyContent: "center", alignItems: "center"
    },

    bottomNavText: {
        color: '#71797e', textAlignVertical: "center", textAlign: "center",
        fontSize: 20, fontWeight: "bold"
    }
});
