import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
export default function Announcements() {
  const newTaskData = [{
    title: "04/20/2022",
    data: [
      {
        id: "1",
        task: "Buy groceries"
      },
      {
        id: "2",
        task: "Feed Cat"
      },
      {
        id: "3",
        task: "Sleep for 3 hours"
      },
      {
        id: "4",
        task: "Water Plants"
      },
      {
        id: "5",
        task: "Drink Water"
      },
    ]
  }];
  const completedTaskData = [{
    title: "04/19/2022",
    data: [
      {
        id: "6",
        task: "Make a section list tutorial"
      },
      {
        id: "7",
        task: "Share this tutorial"
      },
      {
        id: "8",
        task: "Ask doubt in the Comments"
      },
      {
        id: "9",
        task: "Subscribe to logrocket"
      },
      {
        id: "10",
        task: "Read next Article"
      },
      {
        id: "11",
        task: "Read next Article 2"
      },
      {
        id: "12",
        task: "Read next Article 3"
      },
      {
        id: "13",
        task: "Read next Article 4"
      },
      {
        id: "14",
        task: "Read next Article 5"
      },
      {
        id: "15",
        task: "Read next Article 6"
      },
      {
        id: "16",
        task: "Read next Article 7"
      },
      {
        id: "17",
        task: "Read next Article 8"
      },
      {
        id: "18",
        task: "Read next Article 9"
      },
      {
        id: "19",
        task: "Read next Article 10"
      },
    ]
  }];
  return (
    <View style={styles.container}>
      <SectionList
        sections={[...newTaskData, ...completedTaskData]}
        renderItem={({item})=>(
            <Text style={styles.taskItem}>{item.task}</Text>
        )}
        renderSectionHeader={({section})=>(
          <Text style={styles.taskTitle}>{section.title}</Text>
        )}
        keyExtractor={item=>item.id}
        stickySectionHeadersEnabled
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eafffe'
  },
  taskItem:{
    padding: 10,
    marginVertical: 15,
    fontSize: 16
  },
  taskTitle:{
    backgroundColor: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    elevation: 4,
    margin: 10,
    marginBottom: 0,
    borderRadius: 10
  },
  heading:{
  alignItems: 'center',
  justifyContent: 'center'
  }
});