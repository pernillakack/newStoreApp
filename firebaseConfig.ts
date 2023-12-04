import { initializeApp } from "firebase/app"
// import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const key = process.env.EXPO_PUBLIC_FIREBASE_KEY
const aDomain = process.env.EXPO_PUBLIC_AUTHDOMAIN
const pId = process.env.EXPO_PUBLIC_PROJECTID
const storageB = process.env.EXPO_PUBLIC_STORAGEBUCKET
const sendId = process.env.EXPO_PUBLIC_SENDERID
const appId = process.env.EXPO_PUBLIC_APPID

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: key,
  authDomain: aDomain,
  projectId: pId,
  storageBucket:storageB,
  messagingSenderId: sendId,
  appId: appId
}

export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)
// export const FIREBASE_AUTH = getAuth(FIREBASE_APP)


