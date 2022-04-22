import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from "react-native";
//import database from '@react-native-firebase/database';
import { withFirebaseHOC } from '../config/Firebase';
import {AnnouncementData} from '../constants/AnnouncementData'

class Announcements extends Component {
state = {
        DATA: AnnouncementData,
      };
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
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
return(
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={this.state.DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
)
}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});

export default withFirebaseHOC(Announcements)