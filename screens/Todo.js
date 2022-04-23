import React, { Component, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
//import { color } from 'react-native-reanimated';
import Task from './../components/Task';
import { withFirebaseHOC } from '../config/Firebase';
import BottomNavigator from './BottomNavigator';

//const [task, setTask] = useState();
//const [taskItems, setTaskItems] = useState([]);
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      taskItems: []
    }
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
  handleSignout = async () => {
    try {
      await this.props.firebase.signOut()
      //this.props.navigation.navigate('Login')
    } catch (error) {
      console.log(error)
    }
  }
  handleAddTask = () => {
    Keyboard.dismiss();
    //setTaskItems([...taskItems, task])
    //var x= this.getSnapshotBeforeUpdate()
    this.setState({ taskItems: [...this.state.taskItems, this.state.task] });
    //setTask(null);
    this.setState({ task: null });
  }

  completeTask = (index) => {
    let itemsCopy = [...this.state.taskItems];
    itemsCopy.splice(index, 1);
    //setTaskItems(itemsCopy)
    this.setState({ taskItems: itemsCopy });
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, position: 'relative' }}>
        <View style={styleSheet.container}>
          {/* Added this scroll view to enable scrolling when list gets longer than the page */}
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1
            }}
            keyboardShouldPersistTaps='handled'
          >

            {/* Today's Tasks */}
            <View style={styleSheet.tasksWrapper}>
              <Text style={styleSheet.sectionTitle}>Today's tasks</Text>
              <View style={styleSheet.items}>
                {/* This is where the tasks will go! */}
                {

                  this.state.taskItems.map((item, index) => {
                    return (
                      <TouchableOpacity key={index} onPress={() => this.completeTask(index)}>
                        <Task text={item} />
                      </TouchableOpacity>
                    )
                  })
                }
              </View>
            </View>

          </ScrollView>

          {/* Write a task */}
          {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
          <View style={styleSheet.writeTaskWrapper}>
            <View style={{ flexDirection: 'row' }}>
              <TextInput style={styleSheet.input} placeholder={'Write a task'} value={this.state.task} onChangeText={text => { this.setState({ task: text }) }} />
              <TouchableOpacity onPress={() => this.handleAddTask()}>
                <View style={styleSheet.addWrapper}>
                  <Text style={styleSheet.addText}>+</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default withFirebaseHOC(Todo);

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',//'#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'relative',
    bottom: "15%",
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    //flexDirection:'column'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#000',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 3,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#000',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    marginLeft:'15%'
  },
  addText: {},
  bottomNavView: {
    height: 35, justifyContent: "center", alignItems: "center"
  },

  bottomNavText: {
      color: '#71797e', 
      textAlignVertical: "center", 
      textAlign:'center',
      //textAlign: "left",
      fontSize: 20, 
      fontWeight: "bold",
      paddingLeft:'13%'
  }
});