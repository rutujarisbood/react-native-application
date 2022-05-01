import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Rem from '../components/Rem';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function App() {
  const [task, setTask] = useState();
 
  const [taskItems, setTaskItems] = useState([]);
  const [date, setDate] = useState(new Date(Date.now()));
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
    setTaskItems([...taskItems, task ])
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
     
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >


      <View style={styles.tasksWrapper}>
      <Text style={styles.datetitle}>{'Date - '} {date.toDateString()}</Text>

        <View style={styles.items}>
         
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  
                  <Rem text={item} /> 
                  <Text style={styles.timetitle}>{'Time - '} {date.toTimeString()}</Text>
                  
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
        
      </ScrollView>

      
      <View style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write a Reminder'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
        </TouchableOpacity>
      </View>
      
    
    <View>
      
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
    backgroundColor: '#e1d0f2',
  },
  timetitle: {
    maxWidth: '80%'
  },
    datetitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1A5653'
  },
  tasksWrapper: {
    paddingTop: 20,
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
    backgroundColor: '#e1d0f2',
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
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,

},
itemLeft: {
    flexDirection: 'row',
    alignItems: "center",
    flexWrap: 'wrap'
},
timetitle: {
    maxWidth: '80%',
    fontWeight: 'bold'
  },
square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
},
itemText: {
    maxWidth: '80%'
},
circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5, 
},
});