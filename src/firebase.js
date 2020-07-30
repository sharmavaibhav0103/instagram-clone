 import firebase from 'firebase';

 var firebaseConfig = {
  apiKey: "AIzaSyDRsXByFyf1oYBWCFULVrfsQZjWnNBC_hw",
  authDomain: "instagram-clone-d4553.firebaseapp.com",
  databaseURL: "https://instagram-clone-d4553.firebaseio.com",
  projectId: "instagram-clone-d4553",
  storageBucket: "instagram-clone-d4553.appspot.com",
  messagingSenderId: "359170794462",
  appId: "1:359170794462:web:239a12ced949119b40b34f",
  measurementId: "G-FZSBB5Q4NW"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

