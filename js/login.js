// Import the functions you need from the SDKs you need
import { auth } from "./app";
import { login } from "./scripts/loginScript";

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