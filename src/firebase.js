import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhTrFY-IwVxy0LBXTZLR75xNaoeT_5aac",
  authDomain: "clone-59ce6.firebaseapp.com",
  databaseURL: "https://clone-59ce6.firebaseio.com",
  projectId: "clone-59ce6",
  storageBucket: "clone-59ce6.appspot.com",
  messagingSenderId: "589013328726",
  appId: "1:589013328726:web:518c40de11489461362cf7",
  measurementId: "G-4PYV03EG95",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
