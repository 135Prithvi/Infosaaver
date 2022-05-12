// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAW9aM4Z_NGqcyZwwu7dJ_mtES2Fzha7iA",
    authDomain: "driven-seer-337401.firebaseapp.com",
    projectId: "driven-seer-337401",
    storageBucket: "driven-seer-337401.appspot.com",
    messagingSenderId: "1073998496914",
    appId: "1:1073998496914:web:56e2b5f068fdffcfa8924b",
    measurementId: "G-KCCZ4J359K"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
