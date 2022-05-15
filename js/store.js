import { db } from "./app";
import { getProducts } from "./scripts/storeScript";

const stockPrint = document.getElementById("stockPrint");

const ctFilter = document.getElementById("categoryFilter");

let displayedProducts = [];

async function loadProducts(){
    try{
        const stockProducts = await getProducts(db);
        stockPrint.innerHTML = "";
        
        stockProducts.forEach( product => {
            renderProduct(product);
        });

        displayedProducts = stockProducts;
    } catch(e){
        console.log(e);
    }
}

function renderProduct( iproduct ){
    const individualProduct = document.createElement("a");

    individualProduct.className = "iproduct";
    individualProduct.setAttribute("href", `./store.html?=${iproduct.id}`);

    const images = iproduct.product_img ? iproduct.product_img[0] : "https://firebasestorage.googleapis.com/v0/b/rosetashop-157e2.appspot.com/o/products%2Fimages%2Fimg_general_placeholder.jpg?alt=media&token=f88f5f6f-7729-4680-94be-2d9b49f82bd4";

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

function filterBy(){
    const ctSelectedFilter = ctFilter.value;
    const filteredProducts = displayedProducts.filter((product) => product.product_category === ctSelectedFilter);

    if(filteredProducts.length === 0){
        loadProducts();
    }

    stockPrint.innerHTML = "";

    filteredProducts.forEach( product => {
        renderProduct(product);
    });
}

ctFilter.addEventListener("change", e => {
    filterBy();
});

loadProducts();