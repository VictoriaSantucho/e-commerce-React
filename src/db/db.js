// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1M7tcK7UzNmb9UHusoYJQFbxEB1V4rOU",
  authDomain: "e-commerce-a1895.firebaseapp.com",
  projectId: "e-commerce-a1895",
  storageBucket: "e-commerce-a1895.appspot.com",
  messagingSenderId: "271681157313",
  appId: "1:271681157313:web:789e020dae613f4028fc40"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
export default db;