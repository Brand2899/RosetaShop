const form = document.getElementById("form");
const bn_upload = document.getElementById("bn_upload");

let image;

var loadFile = function (e) {
    image = URL.createObjectURL(e.target.files[0]);
};

bn_upload.addEventListener("click", e =>{
    e.preventDefault();

    if(form.product_name.value === "" || form.product_price.value === "" || !image ||form.product_category.value === "" || form.product_colection.value === "" || form.product_reference.value === "" || form.product_color.value === ""){
        alert("Hay al menos un campo vacío");
        return;
    }
 
    let product = {
        product_name: form.product_name.value,
        product_price: form.product_price.value,
        product_img: image,
        product_category: form.product_category.value,
        product_colection: form.product_colection.value,
        product_reference: form.product_reference.value,
        product_color: form.product_color.value
    };

    stock.push(product);
    console.log(stock);

    const stockPrint = document.getElementById("temp_print");

    let lastProduct = stock[stock.length -1];
    const individualProduct = document.createElement("div");
        const {product_name: name, product_price: price, product_img: Pimage, product_category: category, product_colection: colection, product_reference: reference, product_color: color
        } = product;

        individualProduct.innerHTML = `
            <img src="${Pimage}">
            <div>
                <h1>${name}</h1>
                <h2>${price}</h2>
                <h2>${category}</h2>
                <h2>${colection}</h2>
                <h2>${reference}</h2>
            </div>
            <h4>${color}</h4>
        `;
        stockPrint.appendChild(individualProduct);
})

const stock = [
    
];
