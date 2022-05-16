import { auth, db } from "./app";
import { getProducts } from "./scripts/storeScript";
import { createFirebaseCart, getFirebaseCart } from "./cart";
import { async } from "@firebase/util";
import { onAuthStateChanged } from "firebase/auth";

const stockPrint = document.getElementById("stockPrint");
const ctFilter = document.getElementById("categoryFilter");

let userLogged = undefined;
let displayedProducts = [];
let cart = [];
let count = 1;

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
    individualProduct.setAttribute("href", `./product.html?id=${iproduct.id}`);

    const images = iproduct.product_img ? iproduct.product_img[0] : "https://firebasestorage.googleapis.com/v0/b/rosetashop-157e2.appspot.com/o/products%2Fimages%2Fimg_general_placeholder.jpg?alt=media&token=f88f5f6f-7729-4680-94be-2d9b49f82bd4";

    const { product_name: name, product_price: price, product_reference: reference, product_color: color, product_colection: colection, product_category: category } = iproduct;

   const isProductAddedToCart = cart.some((productCart) => productCart.id === iproduct.id);

    const buttonAddCart = isProductAddedToCart ? '<button class="iproduct__button" disabled> Producto añadido </button>' : '<button class="iproduct__button"> Añadir a carrito </button>';

    individualProduct.innerHTML = `
    <img class="iproduct__img" src="${images}">
    <div class="iproduct__info">
        <h1>${name}</h1>
        <h2>$${price}</h2>
    </div>
    <h4 class="iproduct__color">${color}</h4>
    ${buttonAddCart}
    `;
    
    stockPrint.appendChild(individualProduct);

    const addCartButton = individualProduct.querySelector(".iproduct__button");

    addCartButton.addEventListener( "click", async (e) => {
        e.preventDefault();

        cart.push({
            ...iproduct,
            count: count,
        });

        addProductToCart();
        
        if(userLogged){
            await createFirebaseCart(db, userLogged.uid, cart);
        }

        addCartButton.setAttribute("disabled", true);
        addCartButton.innerText = "Producto añadido";
    });
}

async function addProductToCart(){
    localStorage.setItem("cart", JSON.stringify(cart));
}

function getMyCart(){
    const myCart = localStorage.getItem("cart");
    return myCart ? JSON.parse(myCart) : [];
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

onAuthStateChanged(auth, async (user) => {
    if(user){
        /*userLogged = user;
        cart = await getFirebaseCart(db, userLogged.uid);*/
    } else {
        /*cart = getMyCart();*/
    }
    loadProducts();
});
