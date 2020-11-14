import  firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAVuennyhOaxkbF2hxKqJc8j7lwfKofmnM",
    authDomain: "chat-app-4ec5b.firebaseapp.com",
    databaseURL: "https://chat-app-4ec5b.firebaseio.com",
    projectId: "chat-app-4ec5b",
    storageBucket: "chat-app-4ec5b.appspot.com",
    messagingSenderId: "462392201301",
    appId: "1:462392201301:web:285d6963d83abb15db84dc"
  };
  // Initialize Firebase
 
 
 firebase.initializeApp(firebaseConfig);

 export default firebase;