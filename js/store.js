import { app, auth, db } from "./app";

import { getProducts } from "./scripts/storeScript";

const stockPrint = document.getElementById("stockPrint");

async function loadProducts(){
    try{
        await getProducts();
    } catch(e){
        console.log(e);
    }
}

loadProducts();