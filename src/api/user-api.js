import firebase from "firebase/app";
import firestore from '@react-native-firebase/firestore';

const addNewTask = async ({ taskName, note }) => {
    var dateCreated = new Date();
    var user = firebase.auth().currentUser;
    firestore()
    .collection('taskList')
    .add({
        taskName: taskName,
        note: note,
        // duaDate: dueDate,
        dateAdded: dateCreated.toDateString,
        // location: location,
        userID : user.uid
    })
    .then(() => {
        console.log('New Task added!');
    });
}