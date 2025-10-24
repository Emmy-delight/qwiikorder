// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "qwiikorder-ce0de.firebaseapp.com",
  projectId: "qwiikorder-ce0de",
  storageBucket: "qwiikorder-ce0de.firebasestorage.app",
  messagingSenderId: "307219652013",
  appId: "1:307219652013:web:963b8ebf7b0366994f9524"
};


// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig): getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage};