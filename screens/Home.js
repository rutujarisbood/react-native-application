import React, { Component } from 'react';
import { StyleSheet, Text, View , SafeAreaView, FlatList,  TouchableOpacity, TouchableHighlight } from 'react-native';
import { Button } from 'react-native-elements';
import { withFirebaseHOC } from '../config/Firebase';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const DashboardNames = [
  {
    id: 1,
    name: 'TASKS',
    icon: 'tasks',
    page: 'Details'
  },
  {
    id: 2,
    name: 'REMINDER',
    icon: 'bell',
    page: 'Details'
  },
  {
    id: 3,
    name: 'ANNOUNCEMENTS',
    icon: 'bullhorn',
    page: 'Details'
  },
  {
    id: 4,
    name: 'MEDITATION',
    icon: 'microphone',
    page: 'Details'
  },
  {
    id: 5,
    name: 'LEADING WOMEN',
    icon: 'users',
    page: 'Details'
  },

];

const GridView = ({ name, icon }) => (
  <View style={styleSheet.gridStyle}>
  <FontAwesome
            name={icon}
            size={40}
  />
    <Text style={styleSheet.gridText}>{name}</Text>
  </View>
);

class Home extends Component {
  handleSignout = async () => {
    try {
      await this.props.firebase.signOut()
      this.props.navigation.navigate('Auth')
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    return (
      <SafeAreaView style={styleSheet.MainContainer}>
      <View>
      <FlatList
          data={DashboardNames}
          renderItem={({item}) => <GridView name={item.name} icon={item.icon} page={item.page}/>}
          keyExtractor={item => item.id}
          numColumns={2}
          key={item => item.id}
        />
        </View>
      </SafeAreaView>
    )
  }
}

const styleSheet = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
 
  gridStyle: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    margin: 10,
    backgroundColor: 'rgba(5, 70, 236, 0.48)'
  },
 
  gridText: {
    fontSize: 20,
    color: 'black'
  }
})

export default withFirebaseHOC(Home)