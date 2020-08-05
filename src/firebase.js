import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC7Va6SZbKo6CY5itsqliI6RI2OsyI8-sQ",
    authDomain: "tinder-clone-a51df.firebaseapp.com",
    databaseURL: "https://tinder-clone-a51df.firebaseio.com",
    projectId: "tinder-clone-a51df",
    storageBucket: "tinder-clone-a51df.appspot.com",
    messagingSenderId: "969172663829",
    appId: "1:969172663829:web:6f43f73a4d7bf960e0981c",
    measurementId: "G-Y5XMHEG66Z"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;