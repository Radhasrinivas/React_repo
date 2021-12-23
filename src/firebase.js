// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJB9MT9SaY8HsueN4I52f7FX1-gUxCRmU",
    authDomain: "disney-app-cp.firebaseapp.com",
    projectId: "disney-app-cp",
    storageBucket: "disney-app-cp.appspot.com",
    messagingSenderId: "1633700135",
    appId: "1:1633700135:web:219edc620e5a9b61878102",
    measurementId: "G-7SQ0K2MME7"
  };



  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAPh0Q4wlT3ect-FPvyympiOXR6JVFjgqU",
    authDomain: "tapp-app-cp.firebaseapp.com",
    projectId: "tapp-app-cp",
    storageBucket: "tapp-app-cp.appspot.com",
    messagingSenderId: "1055769698789",
    appId: "1:1055769698789:web:10651478fa37412e8c4f0c",
    measurementId: "G-TC4MK7DKC8"
  });

const db = firebaseApp.firestore();

export { db };

