// import firebase, { firestore } from "firebase/app";
import firestore from '@react-native-firebase/firestore';
import config from '../core/config';

// var app = firebase.initializeApp(config);
// db = firebase.firestore(app);

export const addNewTask = async ({ taskName, note }) => {
    var user = firebase.auth().currentUser;
    firestore
    .collection("taskList")
    .add({
        taskName: taskName,
        note: note,
        // duaDate: dueDate,
        created_at: Date.now(),
        // location: location,
        userID : user.uid
    })
    .then(() => {
        console.log('New Task added!');
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
}