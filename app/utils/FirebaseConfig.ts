import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDyshmPwrJxb10gf2BbyeJvCOHdj7WjWPM",
  authDomain: "liteclaw-69bb1.firebaseapp.com",
  projectId: "liteclaw-69bb1",
  storageBucket: "liteclaw-69bb1.appspot.com",
  messagingSenderId: "706472308881",
  appId: "1:706472308881:web:0718d6151ca3143c844f30",
  measurementId: "G-K708SRSDCB"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const auth = getAuth(FIREBASE_APP);
export const db = getFirestore(FIREBASE_APP);
export const storage = getStorage(FIREBASE_APP);
