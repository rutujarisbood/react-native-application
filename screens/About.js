import React, { Component, Fragment, useState } from 'react'
import {
  StyleSheet, View, Text,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity
} from 'react-native'
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'
import { COLORS, SIZES } from '../constants/theme';
import { Linking } from 'react-native'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Meditation } from '../data/meditation'


import { withFirebaseHOC } from '../config/Firebase'
import { readDirectoryAsync } from 'expo-file-system';

// let sessions_data = [
//     'Session 01', 
//     'Session 02',
//     'Session 03',
//     'Session 04',
//     'Session 05',
//     'Session 06',
//   ];

let sessions_data2 = [
  { 'name': 'Session 01', 'value': 'https://www.youtube.com/watch?v=syx3a1_LeFo&ab_channel=Calm' },
  { 'name': 'Session 02', 'value': 'https://www.youtube.com/watch?v=86m4RC_ADEY&ab_channel=Lavendaire' },
  { 'name': 'Session 03', 'value': 'https://www.youtube.com/watch?v=inpok4MKVLM&ab_channel=Goodful' },
  { 'name': 'Session 04', 'value': 'https://www.youtube.com/watch?v=NVPrxcR_RZI&ab_channel=JessicaHeslop-ManifestbyJess' },
  { 'name': 'Session 05', 'value': 'https://www.youtube.com/watch?v=j7d5Plai03g&ab_channel=Goodful' },
  { 'name': 'Session 06', 'value': 'https://www.youtube.com/watch?v=U9YKY7fdwyg&list=PLQiGxGHwiuD1kdxsWKFuhE0rITIXe-7yC&index=5&ab_channel=Goodful' },

];



class About extends Component {
  //const [exercise, setExercise] = useState(route.params.exercise);
  exercise = {
    title: 'Meditation',
    image: require('../images/BgPurple.png'),
    subTitle:
      'Live happier and healthier by learning the fundamentals of meditation and mindfulness',
    duration: '3-10 MIN Course',
  }

  handleOnclick = async (pagename) => {
    try {
        //await this.props.firebase.signOut()
        //(`${page}`)
        this.props.navigation.navigate(pagename)
    } catch (error) {
        console.log(error)
    }
  }

  SessionItem = ({ session, index }) => {
    return (
      <View
        style={{
          backgroundColor: COLORS.white,
          width: 0.5 * SIZES.width - 40,
          borderRadius: 10,
          marginBottom: 10,
          marginHorizontal: 5,
          height: 70,
          padding: 15,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          shadowColor: '#9e9898',
          elevation: 5,
        }}>
        <View
          style={{
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 2,
            borderColor: COLORS.purple,
            backgroundColor: index == 0 ? COLORS.purple : COLORS.white,
            marginRight: 15,
            borderRadius: 20,
          }}>
          <FontAwesome5Icons
            name="play"
            style={{ color: index == 0 ? COLORS.white : COLORS.purple }}
          />
        </View>
        <Text>{session}</Text>
      </View>
    );
  };
render(){
  return (
    <SafeAreaView style={{ flex: 1, position: 'relative' }}>
      <StatusBar
        backgroundColor={'#C7B8F5'}
        barStyle={'dark-content'}
        animated={true}
      />
      <View
        style={{
          width: '100%',
          height: 0.4 * SIZES.height,
          padding: 30,
          backgroundColor: '#C7B8F5',
          position: 'relative',
        }}>
        <Image
          source={require('../images/Exercise3.png')}
          style={{
            position: 'absolute',
            top: 60,
            left: -50,
          }}
        />
        <Text style={{ fontSize: 30, lineHeight: 45, color: '#7B4D9D' }}>{this.exercise.title}</Text>
        <Text style={{ fontSize: 16, opacity: 0.6, marginVertical: 10, color: '#A76BD5' }}>
          {this.exercise.duration}
        </Text>
        <Text style={{ fontSize: 16, width: '85%', color: '#A76BD5' }}>{this.exercise.subTitle}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor: COLORS.white, //9096 search
            width: '60%',
            height: 50,
            borderRadius: 25,
            marginVertical: 30,
          }}>
          <FontAwesome5Icons
            name="search"
            size={22}
            style={{
              marginHorizontal: 20,
              color: '#71797e'
            }}
          />
          <TextInput placeholder="Search" placeholderTextColor={'#71797e'} style={{ flex: 1, color: '#71797e', }} />
        </View>

        <Image
          source={this.exercise.image}
          style={{
            position: 'absolute',
            bottom: 40,
            right: -130,
            width: 350,
            height: 350,
            resizeMode: 'contain',
          }}
        />
      </View>

      <View style={{ marginTop: -30, marginHorizontal: 30 }}>


        <Text style={{ marginVertical: 15, fontSize: 20 }}></Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor: COLORS.white, //9096 session list
            color: "#12ab12",
            borderRadius: 15,
            padding: 15,
            shadowColor: '#9e9898',
            elevation: 5,
          }}>
          <Image
            source={require('../images/Exercise4.png')}
            style={{ width: 80, height: 100, resizeMode: 'center' }}
          />

          <View>
            {sessions_data2.map((item) => (
              <View>
                <Text style={{ color: '#71797e' }} onPress={() => {
                  Linking.openURL(item.value);
                }}>{item.name}</Text>
              </View>
            ))}
          </View>
        </View>

        <Text style={{ marginVertical: 15, fontSize: 20, color: '#71797e' }}>Relaxation</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor: COLORS.white, //9096 relax
            borderRadius: 15,
            padding: 15,
            shadowColor: '#9e9898',
            elevation: 5,
          }}>
          <Image
            source={require('../images/Exercise2.png')}
            style={{ width: 80, height: 60, resizeMode: 'center' }}
          />
          <View>
            <Text style={{ color: '#71797e' }} onPress={() => {
              Linking.openURL('https://www.youtube.com/watch?v=krKXXmnLQ80&ab_channel=MeditationVacation');
            }}>Video- for Relaxation</Text>
            <Text style={{ color: '#71797e' }}>Live happier and healthier by learning fundamentals of Relaxation</Text>
          </View>
        </View>

      </View>

      <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <View style={{ flexDirection: "row", }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity style={{ backgroundColor: '#fff' }} onPress={() => this.handleOnclick('Home')}>
              <View style={styleSheet.bottomNavView}>
                <Text style={styleSheet.bottomNavText}>Home</Text>
              </View>
            </TouchableOpacity>
            {/* <Button color="#cfa5fa" style={{backgroundColor:'#000'}} title="home" onPress={()=>this.props.navigation.navigate('Home')} >hi</Button> */}
          </View>

          <View style={{ flex: 1 }}>
            <TouchableOpacity style={{ backgroundColor: '#fff' }} onPress={() => this.handleOnclick('ProfileScreen')}>
              <View style={styleSheet.bottomNavView}>
                <Text style={styleSheet.bottomNavText}>Profile</Text>
              </View>
            </TouchableOpacity>
            {/* <Button title="profile" onPress={()=>this.props.navigation.navigate('ProfileScreen')} >ho</Button> */}
          </View>

          <View style={{ flex: 1 }}>
            <TouchableOpacity style={{ backgroundColor: '#fff' }} onPress={() => this.handleOnclick('ProfileScreen')}>
              <View style={styleSheet.bottomNavView}>
                <Text style={styleSheet.bottomNavText}>logout</Text>
              </View>
            </TouchableOpacity>
            {/* <Button title="profile" onPress={()=>this.props.navigation.navigate('ProfileScreen')} >ho</Button> */}
          </View>
        </View>


      </View>
    </SafeAreaView>


  );
          }
};





export default withFirebaseHOC(About)

const styleSheet = StyleSheet.create({
 
  
  gribottomButtondText: {
    position: 'absolute',
    bottom:0,
    left:0,
    fontSize: 20,
    color: '##fff8dc',
    backgroundColor: '#cfa5fa',
  },

  bottomNavView:{
    height: 35,justifyContent: "center",alignItems: "center"
  },

  bottomNavText:{
    color:'#71797e', textAlignVertical: "center",textAlign: "center",
    fontSize:20,fontWeight:"bold"
  }
})