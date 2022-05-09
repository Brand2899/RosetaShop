import { signInWithEmailAndPassword } from "firebase/auth";

async function login(auth, { email, password }){
    try{
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        alert(`Bienvenido, usuario ${user.uid}`);

    } catch(e){
        if(e.code === "auth/user-not-found"){
            alert("Usuario no encontrado")   
        }

        if(e.code === "auth/wrong-password"){
            alert("Contraseña incorrecta")   
        }
        console.log(e.code);
    }
}

export{
    login
}