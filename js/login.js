// Import the functions you need from the SDKs you need
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
import firebaseConfig from "./utils/firebase";

import { login } from "./scripts/loginScript";


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", e =>{
    e.preventDefault();

    const email = loginForm.user_email.value;
    const password = loginForm.user_password.value;

    const logUser ={
        email,
        password
    }

    login(auth, logUser);
});