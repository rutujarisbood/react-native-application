import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, TouchableOpacity } from "react-native";
//import database from '@react-native-firebase/database';
import { withFirebaseHOC } from '../config/Firebase';
import { AnnouncementData } from '../constants/AnnouncementData'
//import BottomNavigator from './BottomNavigator';

class Announcements extends Component {
    state = {
        DATA: AnnouncementData,
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
            this.props.navigation.navigate('Auth')
        } catch (error) {
            console.log(error)
        }
    }
    /*componentDidMount() {
    try {
          database()
            .ref('/DATA')
            .on('value', snapshot => {
            console.log('########################################');
              console.log('########################################User data: ', snapshot.val());
              this.state.AnnouncementData = snapshot.val();
            });
        } catch (error) {
          console.log(error)
        }
          }*/
    render() {
        const Item = ({ title }) => (
            <View style={styleSheet.item}>
                <Text style={styleSheet.title}>{title}</Text>
            </View>
        );
        return (
            <SafeAreaView style={styleSheet.container}>
                <SectionList
                    sections={this.state.DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <Item title={item} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styleSheet.header}>{title}</Text>
                    )}
                />

            </SafeAreaView>
        )
    }
};

const styleSheet = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16
    },
    item: {
        backgroundColor: "#959aa3",
        padding: 20,
        marginVertical: 8
    },
    header: {
        fontSize: 32,
        backgroundColor: "#666b73"
    },
    title: {
        fontSize: 24
    },
    bottomNavView: {
        height: 35, justifyContent: "center", alignItems: "center"
    },

    bottomNavText: {
        color: '#71797e',
        textAlignVertical: "center",
        textAlign: 'center',
        //textAlign: "left",
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: '13%'
    }
});

export default withFirebaseHOC(Announcements)