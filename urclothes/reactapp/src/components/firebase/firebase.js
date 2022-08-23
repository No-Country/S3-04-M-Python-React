import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAaZimYKK_n1UUxJyKYi61qc4mFVRG7N5k",
    authDomain: "urclothes-51504.firebaseapp.com",
    projectId: "urclothes-51504",
    storageBucket: "urclothes-51504.appspot.com",
    messagingSenderId: "669826839961",
    appId: "1:669826839961:web:e7d76d28c29dd9eb308f08",
    measurementId: "G-B4409001GP"
}

const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
// export const db = firebase.firestore();

export default app;