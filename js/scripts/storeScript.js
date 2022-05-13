import { collection, getDoc } from "firebase/firestore";

async function getProducts(db){
    try{
        const collectionRef = collection(db, "products");
        const result = await getDocs(collectionRef);

        console.log(result);
    } catch(e){
        console.log(e);
    }
}

export{
    getProducts,
}