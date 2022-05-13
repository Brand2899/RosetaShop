import { auth, db } from "./app";
import { addUserInfo, createUser } from "./scripts/registerScript";

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