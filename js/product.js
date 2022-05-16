import { db } from "./app";
import { getProduct } from "./scripts/productsScript";

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

async function loadProduct(){
    try{
        const productId = getParam("id");

        const data = await getProduct(db, productId);

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

    let counter = 1;

    productInfoSection.innerHTML = `
        <h1 class="product__name">${product.product_name}</h1>
        <h2 class="product__price">$${product.product_price}</h2>
        <h4 class="product__color">${product.product_color}</h4>
        <h5 class="product__reference">${product.product_reference}</h5>
        <div class="product__countBtn flex">
            <button class="subButton"> - </button>
            <h4 class="counter">${counter}</h4>
            <button class="addButton"> + </button>
        </div>
        <button class="product__cart">Añadir al carrito</button>
    `;

    const counterTag = productInfoSection.querySelector(".counter");

    const addButton = productInfoSection.querySelector(".addButton");
    addButton.addEventListener("click", e => {
        counter++;
        counterTag.innerText = counter;
    });

    const subButton = productInfoSection.querySelector(".subButton");
    subButton.addEventListener("click", e => {
        if(counter > 1){
            counter--;
            counterTag.innerText = counter;
        }
    });
}

loadProduct();