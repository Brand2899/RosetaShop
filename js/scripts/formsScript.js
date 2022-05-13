import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes,getDownloadURL } from "firebase/storage";

async function addProductToStock(db, product){
    try{
        await addDoc(collection(db, "products"), product);
        //console.log("productos añadidos!")
    } catch (e) {
        console.log(e);
    }
}

async function imageUploadReference(storage, image){
    try{
        const storageRef = ref(storage, `products/images/${image.name}`);
        return await uploadBytes(storageRef, image);
    } catch (e){
        console.log(e);
    }
}

async function uploadImages(storage, product_img = []){
    try{
        const images = product_img.map(async (image) => {
            const imageReference = await imageUploadReference(storage, image);
            
            return getDownloadURL(ref(storage, imageReference.ref.fullPath));
        });

        return images;
    } catch (e){
        console.log(e);
    }
}

export{
    addProductToStock,
    uploadImages
}