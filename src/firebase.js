// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdtaKmbLfs-IMpBRrHlR63vZJ76CwSul0",
  authDomain: "prasad-todo-app.firebaseapp.com",
  projectId: "prasad-todo-app",
  storageBucket: "prasad-todo-app.firebasestorage.app",
  messagingSenderId: "376170013169",
  appId: "1:376170013169:web:6ffa0a8f3233f08f996450",
  measurementId: "G-1CHYX10S7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
//initialize authentication to get reference to service
export const auth = getAuth(app);

// export database firestore 
export const db = getFirestore(app); 