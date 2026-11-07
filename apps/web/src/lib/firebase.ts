import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuWzOha0kXh7BBGTEtkLvcm7v1HS04Yho",
  authDomain: "atu-programming-society.firebaseapp.com",
  databaseURL: "https://atu-programming-society-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "atu-programming-society",
  storageBucket: "atu-programming-society.firebasestorage.app",
  messagingSenderId: "251097356481",
  appId: "1:251097356481:web:4f7f16a0875e3b8d805c40"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Export Authentication and Firestore instances for use across the site
export const auth = getAuth(app);
export const db = getFirestore(app);