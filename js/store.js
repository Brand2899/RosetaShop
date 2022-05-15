import { db } from "./app";
import { getProducts } from "./scripts/storeScript";

const stockPrint = document.getElementById("stockPrint");

async function loadProducts(){
    try{
        const stockProducts = await getProducts(db);
        
        stockProducts.forEach( product => {
            renderProduct(product);
        });

    } catch(e){
        console.log(e);
    }
}

function renderProduct( iproduct ){
    const individualProduct = document.createElement("a");

    individualProduct.className = "iproduct";
    individualProduct.setAttribute("href", `./store.html?=${iproduct.id}`);

    const images = iproduct.images ? items.images[0] : "https://firebasestorage.googleapis.com/v0/b/rosetashop-157e2.appspot.com/o/products%2Fimages%2Fimg_general_placeholder.jpg?alt=media&token=f88f5f6f-7729-4680-94be-2d9b49f82bd4";

    const { product_name: name, product_price: price, product_reference: reference, product_color: color, product_colection: colection, product_category: category } = iproduct;

    individualProduct.innerHTML = `
    <img class="iproduct__img" src="${images}">
    <div class="iproduct__info">
        <h1>${name}</h1>
        <h2>${price}</h2>
    </div>
    <h4 class="iproduct__color">${color}</h4>
    <button class="iproduct__button"> Añadir a carrito </button>
    `;
    
    stockPrint.appendChild(individualProduct);
}

loadProducts();