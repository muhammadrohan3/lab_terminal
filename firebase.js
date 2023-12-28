// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase, } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARn3Ch43_5DyU1GkNYrpxU2x_j-FE5h_M",
  authDomain: "reactnative-firebase-de5a5.firebaseapp.com",
  databaseURL: "https://reactnative-firebase-de5a5-default-rtdb.firebaseio.com",
  projectId: "reactnative-firebase-de5a5",
  storageBucket: "reactnative-firebase-de5a5.appspot.com",
  messagingSenderId: "265293353941",
  appId: "1:265293353941:web:4b4c797001f86bf7b5235c",
  databaseURL: "https://reactnative-firebase-de5a5-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export const firestore = getFirestore(app);

export default db;