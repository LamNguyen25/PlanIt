
import React, { useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Dimensions, 
  FlatList } from 'react-native';

import {theme} from '../core/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Menu from './Menu';
import TaskItem from '../components/TaskItem';
import TaskInput from '../components/TaskInput';
const Screen = Dimensions.get('window')
const center = Screen.width / 2 ;
// import { addNewTask } from '../api/user-api';


function Dashboard({ navigation }) {
  const [taskList, setTaskList] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [note, setNote] = useState("");
  const [isAddMode, setIsAddMode] = useState(false);
  const [isOpen, setMenuOpen] = useState(false);


  // const addNewTask = async ({ taskName, note }) => {
  //   var dateCreated = new Date();
  //   var user = firebase.auth().currentUser;
  //   firestore()
  //   .collection('taskList')
  //   .add({
  //       taskName: taskName,
  //       note: note,
  //       // duaDate: dueDate,
  //       dateAdded: dateCreated.toDateString,
  //       // location: location,
  //       userId: user.uid
  //   })
  //   .then(() => {
  //       console.log('New Task added!');
  //   });
  // }

  const addTaskHandler = (taskTitle) => {
    if(taskTitle.length === 0) {
      return;
    }

    setTaskList(currentTasks => [
      ...currentTasks,
      { id: Math.random().toString(), value: taskTitle }
    ]);


    setIsAddMode(false);
  }

  // const addNodeHandler = (noteContent) => {
  //   if(noteContent.length === 0) {
  //     return;
  //   }

  //   setNotes(currentNodes => [
  //     ...currentNodes,
  //     { id: Math.random().toString(), value: noteContent }
  //   ]);
  //   setIsAddMode(false);
  // }


  const removeTaskHandler = taskId => {
    setTasks(currentTasks => {
      return currentTasks.filter(task => task.id !== taskId);
    });
  };
  
  const cancelTaskAdditionalHandler = () => {
    setIsAddMode(false);
  }
  
    return (
      <View style={styles.container}>
       
        <View style={styles.mainScreen}>
          <View>
            
            <TouchableOpacity  style={ styles.headerHolder } onPress={() => setIsAddMode(true)} >
              <Icon style={ styles.addBtn } name='add-circle' size={24} />
              <Text style={styles.btnHeaderTitleStyle} >Add New Task</Text>

            </TouchableOpacity>

            <TaskInput
              visible={isAddMode}
              onAddTask={addTaskHandler}
              // onAddNote={addNodeHandler}
              onCancel={cancelTaskAdditionalHandler}
            />
          </View>
          <View>
            <FlatList 
              keyExtractor={(item, index) => item.id}
              // data={tasks + notes}
              data = {
                taskList
              }
              renderItem={itemData => (
                <TaskItem 
                  id={itemData.item.id} 
                  //onDelete={removeTaskHandler} 
                  title={itemData.item.value}
                  onClick={() => navigation.navigate('TaskDetails', {
                    title: itemData.item.value,
                    time: "08/12/2020",
                  } 
                  )}
                /> 
              )}
            />
          </View>
          
        </View>
      </View>
    )
  //}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: theme.colors.bgMain
  },
  navBar: {
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 25,
    margin: 3
  },
  button: {
    position: 'absolute',
    top: 20,
    padding: 16,
  },
  headerHolder: {
    padding: 25,
    flex: 1,
    marginTop: 10,
    marginBottom: 10
  },
  btnHeaderTitleStyle: {
    position: 'absolute',
    fontSize: 20,
    fontWeight: '700',
    marginLeft: center - (center/3),
    color: theme.colors.bdNightBlue
  },
  addBtn: {
    position: 'absolute',
    padding: 25,
    marginLeft: center - (center/5)
  },
  siteName: {
    marginTop: 70
  },
  sideMenu: {
    flex: 1,
    // backgroundColor: theme.colors.bdNightBlue,
    backgroundColor: '#2D5362',
    padding: 10,
    marginTop: -5
    
  },
  // mainScreen: {
  //   shadowColor: '#000000',
  //   shadowOpacity: 0.4,
  //   shadowOffset: { height: -5, width:-5},
  //   shadowRadius: 10,
  //   //backgroundColor: theme.colors.bgMain,
  // },
  siteName: {
    marginTop: 30,
    width: 250,
    color: theme.colors.h1White
  },
  buttonContainer: {
    top: 150
  },
  
})

export default Dashboard;
