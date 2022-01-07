import firebase from "firebase";

const firebaseConfig = {
  apiKey: "",
  authDomain: "amazon-clone-safiullah.netlify.app",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

