// Import the functions you need from the SDKs you need
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { createUser } from "./scripts/registerScript";

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

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", e =>{
    e.preventDefault();
    
    const name = registerForm.user_name.value;
    const email = registerForm.user_email.value;
    const password = registerForm.user_password.value;

    const newUser = {
        name,
        email,
        password
    }

    createUser(auth, newUser);
});