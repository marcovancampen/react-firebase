// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChUX4yqeUh03fnAFvOaRUc3d3IutkXXYg",
  authDomain: "nosql-school.firebaseapp.com",
  projectId: "nosql-school",
  storageBucket: "nosql-school.appspot.com",
  messagingSenderId: "726790021336",
  appId: "1:726790021336:web:97e7515d4cb90701d637ad",
  measurementId: "G-25PCEYCL6K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
