import React, { Component } from 'react';
import { StyleSheet, Text, Button, View , SafeAreaView, FlatList,  TouchableOpacity, TouchableHighlight } from 'react-native';
//import { Button } from 'react-native-elements';
import { withFirebaseHOC } from '../config/Firebase';
import FontAwesome,{SolidIcons} from 'react-native-vector-icons/FontAwesome';
const DashboardNames = [
  {
    id: 1,
    name: 'TASKS',
    icon: 'tasks',
    page: 'Todo',

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
    page: 'About'
  },
  {
    id: 5,
    name: 'LEADING WOMEN',
    icon: 'users',
    page: 'ProfileScreen',
    //onpress
  },
  // {
  //   id: 6,
  //   name: 'Tasks',
  //   icon: 'users',
  //   page: 'Todo',
  //   //onpress
  // },

];





class Home extends Component {
  

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
      this.props.navigation.navigate('Auth')
    } catch (error) {
      console.log(error)
    }
  }
  
  // todo = async () => {
  //   try {
  //     //await this.props.firebase.signOut()
  //     this.props.navigation.navigate('Todo')
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  render() {
    const GridView = ({ name, icon,page }) => (
      <View style={styleSheet.gridStyle}>
      <FontAwesome
                //icon={}
                name={name}
                size={40}
      />
      <Text onPress={()=>this.handleOnclick(page)}>{name}</Text>
        {/* <Button title={name} onPress={()=>this.handleOnclick(page)} style={styleSheet.gridText}></Button> */}
      </View>
    );
    return (
      <SafeAreaView style={styleSheet.MainContainer}>
      <View > 
      <FlatList
          data={DashboardNames}
          renderItem={({item}) => <GridView name={item.name} icon={item.icon} page={item.page}/>}
          keyExtractor={item => item.id}
          numColumns={2}
          key={item => item.id}
        />
        </View>
        <View style={{position: 'absolute',bottom:0,left:0,right:0}}>
          <View style={{ flexDirection:"row", }}>
            <View style={{flex:1}}>
              <TouchableOpacity style={{backgroundColor:'#fff'}} onPress={()=>this.handleOnclick('Home')}>
                <View style={styleSheet.bottomNavView}>
                  <Text style={styleSheet.bottomNavText}>Home</Text>
                </View>
              </TouchableOpacity>
              {/* <Button color="#cfa5fa" style={{backgroundColor:'#000'}} title="home" onPress={()=>this.props.navigation.navigate('Home')} >hi</Button> */}
            </View>
            <View style={{flex:1}}>
            <TouchableOpacity style={{backgroundColor:'#fff'}} onPress={()=>this.handleOnclick('ProfileScreen')}>
                <View style={styleSheet.bottomNavView}>
                  <Text style={styleSheet.bottomNavText}>Profile</Text>
                </View>
              </TouchableOpacity>
              {/* <Button title="profile" onPress={()=>this.props.navigation.navigate('ProfileScreen')} >ho</Button> */}
            </View>
            <View style={{flex:1}}>
            <TouchableOpacity style={{backgroundColor:'#fff'}} onPress={()=>this.handleOnclick('ProfileScreen')}>
                <View style={styleSheet.bottomNavView}>
                  <Text style={styleSheet.bottomNavText}>logout</Text>
                </View>
              </TouchableOpacity>
              {/* <Button title="profile" onPress={()=>this.props.navigation.navigate('ProfileScreen')} >ho</Button> */}
            </View>
          </View>
        
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
    color: '#cfa5fa',
    backgroundColor: '#cfa5fa'
  },

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

export default withFirebaseHOC(Home)