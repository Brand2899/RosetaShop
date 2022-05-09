import { createUserWithEmailAndPassword } from "firebase/auth";

async function createUser(auth, { email, password }){
    try{
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        alert(`Bienvenido, usuario ${user.uid}`);

    } catch(e){
        if(e.code === "auth/weak-password"){
            alert("Tu contraseña debe tener al menos 6 caracteres")   
        }

        if(e.code === "auth/email-already-in-use"){
            alert("Tu correo ya está en uso")   
        }
        console.log(e.code);
    }
}

export{
    createUser
}