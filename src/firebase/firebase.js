import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBHbjrd1XjJIXw0GJV0P_aFkUhhCZyteVI",
    authDomain: "udevs-layout-firebase.firebaseapp.com",
    projectId: "udevs-layout-firebase",
    storageBucket: "udevs-layout-firebase.appspot.com",
    messagingSenderId: "257795736743",
    appId: "1:257795736743:web:55325f1141bed3b5ab0782",
    measurementId: "G-MQ8XL03H2J"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };