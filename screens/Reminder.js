import React, {useState} from 'react';
import { Button, KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Rem from '../components/Rem';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    Keyboard.dismiss();
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
    setTaskItems([...taskItems, task])
    setTask(null);
  };

  const handleAddTask = () => {
    Keyboard.dismiss();
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Reminders</Text>
        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Rem text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
        
      </ScrollView>

      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <View style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write Reminder'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          {/* <View style={styles.addWrapper}>
             <Text style={styles.addText}>+</Text> 
          </View> */}
        </TouchableOpacity>
      </View>
      
    
    <View>
      {/* <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} /> */}
      <TouchableOpacity onPress={showDatepicker} >
      <View style={styles.addWrappers}>
             <Text style={styles.addText}>Set Date</Text> 
          </View> 
          </TouchableOpacity>
          <TouchableOpacity onPress={showTimepicker} >
          <View style={styles.addWrapper}>
             <Text style={styles.addText}>Set Time</Text> 
          </View> 
          </TouchableOpacity>
        {/* <Button onPress={showTimepicker} title="Set Time!" /> */}
       
      </View>
   
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3CCDE',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#1A5653'
  },
  items: {
    marginTop: 25,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 120,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#1E3148',
    borderWidth: 3,
    width: 380,
  },
  addWrappers: {
    fontSize: 50,
    fontWeight: 'bold',
    alignItems: 'center',
    position: 'absolute',
    flex: 1,
    padding: 5,
    width: 380,
    height: 45,
    bottom: 60,
    backgroundColor: '#5CFF5C',
    borderRadius: 60,
    justifyContent: 'center',
    borderColor: '#1E3148',
    borderWidth: 1,
  },
  addWrapper: {
    alignItems: 'center',
    position: 'absolute',
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 5,
    width: 380,
    height: 45,
    bottom: 10,
    backgroundColor: '#5CFF5C',
    borderRadius: 60,
    justifyContent: 'center',
    borderColor: '#1E3148',
    borderWidth: 1,
  },
  addText: {},
});
