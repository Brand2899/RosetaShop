import { doc, getDoc } from "firebase/firestore";
import { db } from "./app";

const productInfoSection = document.getElementById("productInfo");
const productAssetSection = document.getElementById("productAsset");

function getParam(param){
    try{
        const url = window.location.search;
        const searchParams = new URLSearchParams(url);
        const productId = searchParams.get(param);
        return productId;
    } catch (e){
        console.log(e);
    }
}

async function getProduct(){
    try{
        const productId = getParam("id");
        const docRef = doc(db, "products", productId);
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();

        const product = {
            ...data,
            id: productId,
        }

        renderProduct(product);
    } catch (e){
        console.log(e);
    }
}

function renderProduct(product){
    let counter = 1;
    let aditionalImages = 0;

    if(product.product_img.length === 2){
        aditionalImages = 2;
    } else if(product.product_img.length === 3){
        aditionalImages = 3;
    } else if(product.product_img.length === 4){
        aditionalImages = 4;
    } else {
        aditionalImages = 1;
    }

    switch(aditionalImages){
        case 1:
            productAssetSection.innerHTML = `
                <div>
                    <ul class="product__imgArray flex">
                        <li class="imgResponsive">
                            
                        </li>
                        <li class="imgResponsive">
                            
                        </li>
                        <li class="imgResponsive">
                           
                        </li>
                    </ul>
                </div>

                <img src="${product.product_img[0]}">
            `;
        break;

        case 2:
            productAssetSection.innerHTML = `
                <div>
                    <ul class="product__imgArray flex">
                        <li class="imgResponsive">
                            <img src="${product.product_img[1]}">
                        </li>
                        <li class="imgResponsive">
                            
                        </li>
                        <li class="imgResponsive">
                            
                        </li>
                    </ul>
                </div>

                <img src="${product.product_img[0]}">
            `;
        break;

        case 3:
            productAssetSection.innerHTML = `
                <div>
                    <ul class="product__imgArray flex">
                        <li class="imgResponsive">
                            <img src="${product.product_img[1]}">
                        </li>
                        <li class="imgResponsive">
                            <img src="${product.product_img[2]}">
                        </li>
                        <li class="imgResponsive">
                            
                        </li>
                    </ul>
                </div>

                <img src="${product.product_img[0]}">
            `;
        break;

        case 4:
            productAssetSection.innerHTML = `
                <div>
                    <ul class="product__imgArray flex">
                    <li class="imgResponsive">
                    <img src="${product.product_img[1]}">
                </li>
                <li class="imgResponsive">
                    <img src="${product.product_img[2]}">
                </li>
                        <li class="imgResponsive">
                        <img src="${product.product_img[3]}">
                        </li>
                    </ul>
                </div>

                <img src="${product.product_img[0]}">
            `;
        break;
    }

    productInfoSection.innerHTML = `
        <h1 class="product__name">${product.product_name}</h1>
        <h2 class="product__price">$${product.product_price}</h2>
        <h4 class="product__color">${product.product_color}</h4>
        <h5 class="product__reference">${product.product_reference}</h5>
        <div class="product__countBtn flex">
            <button class="subButton" id="subBtn"> - </button>
            <h4 class="counter">${counter}</h4>
            <button class="addButton" id="addBtn"> + </button>
        </div>
        <button class="product__cart">Añadir al carrito</button>
    `;
}

getProduct();