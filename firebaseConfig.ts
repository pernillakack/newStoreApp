// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnEesW48z8i42g49Y9wTx31GKSUecgmvY",
  authDomain: "funstore-67017.firebaseapp.com",
  projectId: "funstore-67017",
  storageBucket: "funstore-67017.appspot.com",
  messagingSenderId: "156467690288",
  appId: "1:156467690288:web:a90acdf591959cf9ada6f5"
};

export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)