// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpPMHLic9iwGlShWBKRqIyJ0_7C3W4-hY",
  authDomain: "alcaecommerce.firebaseapp.com",
  databaseURL: "https://alcaecommerce-default-rtdb.firebaseio.com",
  projectId: "alcaecommerce",
  storageBucket: "alcaecommerce.appspot.com",
  messagingSenderId: "322657699082",
  appId: "1:322657699082:web:3ccb4f6396767e2e80a6f3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firebase_auth = getAuth(app); 