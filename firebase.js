// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUadFRs_1D5SIW8zqzDfPU8ms-BYYtQbM",
  authDomain: "uber-next-clone1.firebaseapp.com",
  projectId: "uber-next-clone1",
  storageBucket: "uber-next-clone1.appspot.com",
  messagingSenderId: "296837859993",
  appId: "1:296837859993:web:857817fb8110955c7f0608",
  measurementId: "G-H6GVBPM631"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }