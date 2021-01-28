import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCQfcnpo-3q2DkPM9jahQyY3izuZLsmsMw",
  authDomain: "challenge-28115.firebaseapp.com",
  databaseURL: "https://challenge-28115.firebaseio.com",
  projectId: "challenge-28115",
  storageBucket: "challenge-28115.appspot.com",
  messagingSenderId: "622643522684",
  appId: "1:622643522684:web:bcd698f6928cceaf42edf9",
  measurementId: "G-GNVTS64BSW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

