// Import the functions you need from the SDKs you need
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { addUserInfo, createUser } from "./scripts/registerScript";

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

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", async (e) =>{
    e.preventDefault();

    if(registerForm.user_name.value === "" || registerForm.user_lastName.value === "" || registerForm.user_phone.value === "" || registerForm.user_email.value === "" || registerForm.user_password.value === ""){
        alert("Hay al menos un campo vacío");
        return;
    }
    
    const name = registerForm.user_name.value;
    const lastName = registerForm.user_lastName.value;
    const cellphone = registerForm.user_phone.value;

    const email = registerForm.user_email.value;
    const password = registerForm.user_password.value;

    const newUser = {
        name,
        lastName,
        cellphone,
        email,
        password,
        isAdmin: false
    }

    const userCreated = await createUser(auth, newUser);
    await addUserInfo(db, userCreated.uid, newUser);

    alert(`Bienvenido, ${name}`)
});