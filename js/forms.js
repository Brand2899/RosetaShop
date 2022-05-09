// Import the functions you need from the SDKs you need
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
import firebaseConfig from "./utils/firebase";

import { addProductToStock, uploadImages } from "./scripts/formsScript";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById("form");
const bn_upload = document.getElementById("bn_upload");

bn_upload.addEventListener("click", async (e) =>{
    e.preventDefault();

    if(form.product_name.value === "" || form.product_price.value === "" || form.product_category.value === "ct_blank" || form.product_colection.value === "cl_blank" || form.product_reference.value === "" || form.product_color.value === ""){
        alert("Hay al menos un campo vacío");
        return;
    }

    const product_name = form.product_name.value;
    const product_price = form.product_price.value;
    const product_img = form.product_img.files;
    const product_category = form.product_category.value;
    const product_colection = form.product_colection.value;
    const product_reference = form.product_reference.value;
    const product_color = form.product_color.value;

    if(product_img.lenght){
        console.log("hay imagenes");
        await uploadImages(product_img);
        
    }
 
    const newProduct = {
        product_name,
        product_price,
       //product_img,
       product_category,
       product_colection,
        product_reference,
        product_color
    };

    await addProductToStock(db, newProduct);
});