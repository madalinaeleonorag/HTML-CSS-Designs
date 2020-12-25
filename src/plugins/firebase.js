import firebase from "firebase";
import "firebase/auth";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyAitDAes9OPG6mRUXbJHjl2XsIhCZOHXaI",
  authDomain: "htmlcsstemplates.firebaseapp.com",
  databaseURL:
    "https://htmlcsstemplates-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "htmlcsstemplates",
  storageBucket: "htmlcsstemplates.appspot.com",
  messagingSenderId: "368061326918",
  appId: "1:368061326918:web:6352ba6a0d177eef350c47",
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;
