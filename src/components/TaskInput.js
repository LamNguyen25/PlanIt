import React, { useState } from "react";
import { View, TextInput, Button, Modal, StyleSheet } from "react-native";
//import { Button as PaperButton, TextInput } from "react-native-paper";
import { theme } from "../core/theme";

const TaskInput = props => {
  const [enteredTask, setEnteredTask] = useState('');

  const taskInputHandler = enteredText => {
    setEnteredTask(enteredText);
  };

  const addTaskHandler = () => {
    props.onAddTask(enteredTask);
    setEnteredTask('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="New Task"
          style={styles.input}
          onChangeText={taskInputHandler}
          value={enteredTask}
        /> 

        <View style={styles.buttonContainer}>
          <View style={styles.button}> 
            <Button title="CANCEL" color={theme.colors.bdMainRed} onPress={props.onCancel} />
          </View>
          <View style={styles.button}> 
            <Button title="ADD" onPress={addTaskHandler} /> 
          </View>
        </View>
      </View>
    </Modal>
    
  )
}

const styles = StyleSheet.create({
    inputContainer: {
      flex: 1, // take all the available space (it's the only child)
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      width: '80%',
      borderColor: 'black',
      borderWidth: 1,
      padding: 10
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '60%',
    },
    button: {
      width: '40%'
    }
  });

export default TaskInput;