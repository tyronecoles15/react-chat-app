// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYrKVl0-5Lqp1eRPitBx4lkr-nIHz1Lw4",
  authDomain: "chatapp-9e158.firebaseapp.com",
  projectId: "chatapp-9e158",
  storageBucket: "chatapp-9e158.appspot.com",
  messagingSenderId: "243035762043",
  appId: "1:243035762043:web:cc8631561ae38738e321de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth.apply(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);