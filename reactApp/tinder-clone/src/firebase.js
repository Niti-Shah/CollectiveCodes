import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAAMAspKnSwvIXw-7XISAuywF9v1_7z7ow",
    authDomain: "tinder-clone-47d50.firebaseapp.com",
    projectId: "tinder-clone-47d50",
    storageBucket: "tinder-clone-47d50.appspot.com",
    messagingSenderId: "889568169764",
    appId: "1:889568169764:web:edb148a34b4156d81c6db1",
    measurementId: "G-FFS37EVK0W"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;