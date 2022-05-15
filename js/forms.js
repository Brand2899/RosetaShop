// Import the functions you need from the SDKs you need
import { storage, db } from "./app";
import { addProductToStock, uploadImages } from "./scripts/formsScript";

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

    let gallery = [];

    if(product_img.length){
        const images = await uploadImages(storage, [...product_img]); 
        gallery = await Promise.all(images);
    }
 
    const newProduct = {
        product_name,
        product_price,
        product_img: gallery,
        product_category,
        product_colection,
        product_reference,
        product_color
    };

    await addProductToStock(db, newProduct);
});