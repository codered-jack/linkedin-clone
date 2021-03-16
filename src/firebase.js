import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJ4LwgRpD45GZ_YGzuwQry2emmG3jE8ZA",
    authDomain: "linkedin-clone-d3e25.firebaseapp.com",
    projectId: "linkedin-clone-d3e25",
    storageBucket: "linkedin-clone-d3e25.appspot.com",
    messagingSenderId: "21242114480",
    appId: "1:21242114480:web:2188bd8c1b20a77b06a675",
    measurementId: "G-DVZKHP5TDQ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export{db,auth};