import { addDoc, collection } from "firebase/firestore";

async function addProductToStock(db, product){
    try{
        await addDoc(collection(db, "products"), product);
        console.log("productos añadidos!")
    } catch (e) {
        console.log(e);
    }
}

async function uploadImages(images = []){
    console.log(images);
}

export{
    addProductToStock,
    uploadImages
}