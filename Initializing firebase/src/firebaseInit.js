// create firebase config here and export the db object
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPI2cuhxlcir2zgPKxuOl2IZBX0dvaTSg",
  authDomain: "initializing-assignment.firebaseapp.com",
  projectId: "initializing-assignment",
  storageBucket: "initializing-assignment.firebasestorage.app",
  messagingSenderId: "120819731235",
  appId: "1:120819731235:web:a20727a256aebf6cfe9a96",
  measurementId: "G-WJ6779F4GS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
