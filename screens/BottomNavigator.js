import React, { Component } from 'react';
import { StyleSheet, Text, Button, View, SafeAreaView, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native';
//import { Button } from 'react-native-elements';
import { withFirebaseHOC } from '../config/Firebase';

class BottomNavigator extends Component {
    // constructor(){
    //     super(props);
    // }


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
            this.props.navigation.navigate('Login')
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
        return (

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
                        <TouchableOpacity style={{ backgroundColor: '#fff' }} onPress={() => this.handleSignout()}>
                            <View style={styleSheet.bottomNavView}>
                                <Text style={styleSheet.bottomNavText}>logout</Text>
                            </View>
                        </TouchableOpacity>
                        {/* <Button title="profile" onPress={()=>this.props.navigation.navigate('ProfileScreen')} >ho</Button> */}
                    </View>
                </View>

            </View>
        );
    }
}
const styleSheet = StyleSheet.create({
    bottomNavView:{
        height: 35,justifyContent: "center",alignItems: "center"
      },
    
      bottomNavText:{
        color:'#71797e', textAlignVertical: "center",textAlign: "center",
        fontSize:20,fontWeight:"bold"
      }
});
export default withFirebaseHOC(BottomNavigator)
