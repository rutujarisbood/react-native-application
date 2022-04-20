//import React from 'react';
//import { View, Text, Button, StyleSheet } from 'react-native';
import React, { useState, Component } from 'react';
import { StyleSheet,Button,Form,Row,Col,InputGroup, Text, View,Dimensions,FlatList,Modal,ScrollView,TouchableOpacity,Linking,Image } from 'react-native';
//import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import { colors } from '../constants/theme';
//import PersonCard from '../components/PersonCard'
import {Ionicons} from '@expo/vector-icons';
//import { LinearGradient } from 'expo-linear-gradient';
import LinearGradient from 'react-native-linear-gradient';
//import { Colors} from 'react-native-paper';
//import BrickList from 'react-native-masonry-brick-list';
import UserProfile from '../model/users';
import { withFirebaseHOC } from '../config/Firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
var x=""; var value;
class ProfileScreen extends Component {
    
    constructor(){
        super()
       
        const getUser = async () => {try {
            value = JSON.parse(await AsyncStorage.getItem("userDetails"))
        // const value =  AsyncStorage.getItem('userDetails')
        // value != null ? JSON.parse(value) : null;
            if(value !== null) {
            // value previously stored
           
            console.log("**********************************************: "+value.email)
            return value;
            }
        } catch(e) {
            // error reading value
            console.log("^^^^^^^^^^^^^^^^^ : "+e)
        }
        }
    }
    // user= ()=>{try {
    //     const value = await AsyncStorage.getItem('@storage_Key')
    //     if(value !== null) {
    //       // value previously stored
    //     }
    //   } catch(e) {
    //     // error reading value
    //   }
    // }
render(){
    
    //getUser()
    //var x=AsyncStorage.getItem('userDetails');
    //console.log("********* : "+x)
    return (
        <>
            <View className="profile">
                <View className="container h-100">
                    <View className="row d-flex justify-content-center align-items-center h-100">
                        <View className="col-lg-12 col-xl-11">
                            <View
                                className="card text-black"
                                style={{ borderRadius: 25, backgroundColor: "#F7F7F7" }}
                            >
                                <View className="card-body p-md-5">

                                    <View >
                                        <View >
                                            <View >
                                                <LinearGradient
                                                //ButtonLinearGradient
                                                colors={['#704a96','#8360a6','#a681cc','#cfa5fa','#e1d0f2','#ece6f2','#ffffff']}
                                                style={styles.button}>

                                                    <Image
                                                    source={require('../assets/profilePic.png')}
                                                    style={{width:100,height:100,alignSelf:'center',marginTop:20,marginBottom:20,borderRadius:50}}
                                                    />
                                                    <Text style={{textAlign:'center', fontSize:20, fontWeight:'bold',marginBottom:50, marginBottom:10}} >Rutuja</Text>
                                                    <View style={{justifyContent:'flex-start', flexDirection:'row',marginStart:10, marginBottom:20,marginTop:60}}>
                                                        <Ionicons name='location-outline' size={20} color={colors.black}/>
                                                        <Text style={{fontWeight:'700'}}>About : </Text>
                                                    </View>
                                                    <View style={{justifyContent:'flex-start', flexDirection:'row',marginStart:10, marginBottom:20}}>
                                                        <Ionicons name='location-outline' size={20} color={colors.black}/>
                                                        <Text style={{fontWeight:'700'}}>Email : {value.email}</Text>
                                                    </View>
                                                    <View style={{justifyContent:'flex-start', flexDirection:'row',marginStart:10, marginBottom:20}}>
                                                        <Ionicons name='location-outline' size={20} color={colors.black}/>
                                                        <Text style={{fontWeight:'700'}}>Contact : </Text>
                                                    </View>

                                                </LinearGradient>
                                            </View>


                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </>
   );
    }
};

export default withFirebaseHOC(ProfileScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
