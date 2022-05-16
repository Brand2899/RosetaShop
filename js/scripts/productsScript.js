import { doc, getDoc } from "firebase/firestore";

async function getProduct(db, id){
    try{
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();

        return data;
    } catch (e) {
        console.log(e);
    }
}

export{
    getProduct,
}