//import React from 'react';
//import { View, Text, Button, StyleSheet } from 'react-native';
import React, { useState, Component,useEffect  } from 'react';
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
var x={}; var value;

class ProfileScreen extends Component {
    state = {
        isLoading: true,
        imgURL : '../assets/profilePic.png'
      };

      componentDidMount() {
        /
        try {
            //return JSON.parse(await AsyncStorage.getItem("userDetails"))
            AsyncStorage.getItem('userDetails').then((value)=>{
                console.log("999999 : "+typeof(value));
                var yy=JSON.parse(value);
                console.log("777777 : "+typeof(yy));
                console.log("888888 : "+yy.uid);
                if(yy !== null && yy !== undefined) {
                    
                    //console.log("9096 : "+yy.email);
                    x=yy;
                    //console.log("666666 : "+typeof(x));
                    //return value;
                    this.setState({
                        isLoading: false
                      });
                }
                
            });
            //value != null ? JSON.parse(value) : null;
            
        } catch(e) {
            // error reading value
            //console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ : "+e.message)
        }
      }
render(){
    //console.log("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO :"+this.state.isLoading);
    if (this.state.isLoading) {
        return <View><Text>Loading...</Text></View>;
      }
    //getUser()
    //var x=AsyncStorage.getItem('userDetails');
    //console.log("*********%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% : "+x.email)
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
                                                colors={['#704a96','#8360a6','#a681cc','#cfa5fa','#e1d0f2','#ece6f2']}
                                                style={styles.button}>
                                                    
                                                    <Image
                                                    source={require('../assets/profilePic.png')}
                                                    //source={{ uri: this.state.imgURL}}
                                                    style={{width:100,height:100,alignSelf:'center',marginTop:20,marginBottom:20,borderRadius:50}}
                                                    />
                                                    <Text style={{textAlign:'center', fontSize:20, fontWeight:'bold',marginBottom:50, marginBottom:10}} >Rutuja</Text>
                                                    <View style={{justifyContent:'flex-start', flexDirection:'row',marginStart:10, marginBottom:20,marginTop:60}}>
                                                        <Ionicons name='location-outline' size={20} color={colors.black}/>
                                                        <Text style={{fontWeight:'700'}}>About : </Text>
                                                    </View>
                                                    <View style={{justifyContent:'flex-start', flexDirection:'row',marginStart:10, marginBottom:20}}>
                                                        <Ionicons name='location-outline' size={20} color={colors.black}/>
                                                        <Text style={{fontWeight:'700'}}>Email : {x.providerData[0].email}</Text>
                                                    </View>
                                                    <View style={{justifyContent:'flex-start', flexDirection:'row',marginStart:10, marginBottom:20}}>
                                                        <Ionicons name='location-outline' size={20} color={colors.black}/>
                                                        <Text style={{fontWeight:'700'}}>ProviderId :{x.providerData[0].providerId} </Text>
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
