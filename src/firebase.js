import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

// Initializing Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBNLNCo9z8Gv88HA4kxOyigoOLDJAF_gzA",
    authDomain: "dothack-chat-application.firebaseapp.com",
    databaseURL: "https://dothack-chat-application.firebaseio.com",
    projectId: "dothack-chat-application",
    storageBucket: "dothack-chat-application.appspot.com",
    messagingSenderId: "723738734837",
    appId: "1:723738734837:web:100492a6f845768f41d5bc",
    measurementId: "G-HMDWHWHR8B"
};

firebase.initializeApp(firebaseConfig)

// Utility to Export
const db = firebase.database();
const auth = firebase.auth()
const firestore = firebase.firestore();

// Exporting the Utilities
export { db, auth, firestore }