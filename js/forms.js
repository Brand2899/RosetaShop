const form = document.getElementById("form");
const bn_upload = document.getElementById("bn_upload");

bn_upload.addEventListener("click", e =>{
    e.preventDefault();

    if(form.product_name.value === "" || form.product_price.value === "" || form.product_category.value === "" || form.product_colection.value === "" || form.product_reference.value === "" || form.product_color.value === ""){
        alert("Hay al menos un campo vacío");
        return;
    }

    let product = {
        product_name: form.product_name.value,
        product_price: form.product_price.value,
        product_category: form.product_category.value,
        product_colection: form.product_colection.value,
        product_reference: form.product_reference.value,
        product_color: form.product_color.value
    };

    stock.push(product);
    console.log(stock);
})

const stock = [
    
];
