// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZklMFbNOXrNkzqpCfSmxGM-h3AFnyKKo",
    authDomain: "rosetashop-157e2.firebaseapp.com",
    projectId: "rosetashop-157e2",
    storageBucket: "rosetashop-157e2.appspot.com",
    messagingSenderId: "333363330751",
    appId: "1:333363330751:web:be924208d2583c7fca100a"
  };

// Initialize Firebase  
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const storage = getStorage(app);

export{
    app,
    auth,
    db,
    storage,
}