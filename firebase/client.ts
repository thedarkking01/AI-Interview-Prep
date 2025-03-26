// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPYfPU_d_JrNwAsHko9rpAHco8LVB2uIc",
  authDomain: "prepwise-fc035.firebaseapp.com",
  projectId: "prepwise-fc035",
  storageBucket: "prepwise-fc035.firebasestorage.app",
  messagingSenderId: "931031774386",
  appId: "1:931031774386:web:ef9cfc6fb06efb2552c5ab",
  measurementId: "G-017YBJ25VQ"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);