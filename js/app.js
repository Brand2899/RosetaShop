// Import the functions you need from the SDKs you need
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

const createUserForm = document.getElementById("createUserForm");
const loginForm = document.getElementById("loginForm");

createUserForm.addEventListener("submit", e =>{
    e.preventDefault();
    
    const name = createUserForm.user_name.value;
    const email = createUserForm.user_email.value;
    const password = createUserForm.user_password.value;

    createUser(name, email, password);
});

loginForm.addEventListener("submit", e =>{
    e.preventDefault();

    const email = loginForm.user_email.value;
    const password = loginForm.user_password.value;

    login(email, password);
});

async function createUser(name, email, password){

    try{

        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        alert(`Bienvenido, usuario ${user.uid}`);

    } catch(e){
        //auth/weak-password
        //auth/email-already-in-use

        if(e.code === "auth/weak-password"){
            alert("Tu contraseña debe tener al menos 6 caracteres")   
        }

        if(e.code === "auth/email-already-in-use"){
            alert("Tu correo ya está en uso")   
        }
        console.log(e.code);
    }
}

async function login(email, password){

    try{

        const { user } = await signInWithEmailAndPassword(auth, email, password);
        console.log(user);
        //alert(`Bienvenido, usuario ${user.uid}`);

    } catch(e){
        //auth/user-not-found
        //auth/wrong-password
        if(e.code === "auth/user-not-found"){
            alert("Usuario no encontrado")   
        }

        if(e.code === "auth/wrong-password"){
            alert("Contraseña incorrecta")   
        }
        console.log(e.code);
    }
}