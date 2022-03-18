var user = {
    user_name: "user",
    user_email: "user@email.com",
    user_age: 18,
    user_gender: "F",
}

const stock = [
    {
        obj_name: "Selini",
        obj_price: 70000,
        obj_img: "./img/img_products_selini",
        obj_category: "Kimono",
        obj_colection: "Nombres",
        obj_reference: "1581S47F",
        obj_color: "Blanco",
        obj_isPrinted: true
    },

    {
        obj_name: "Espinela",
        obj_price: 70000,
        obj_img: "./img/img_products_espinela",
        obj_category: "Crop Top",
        obj_colection: "Nombres",
        obj_reference: "S548735",
        obj_color: "Plateado",
        obj_isPrinted: false
    },

    {
        obj_name: "Nairobi",
        obj_price: 90000,
        obj_img: "./img/img_products_nairobi-pants",
        obj_category: "Pantalon",
        obj_colection: "Nombres",
        obj_reference: "F4896156",
        obj_color: "Beige",
        obj_isPrinted: false
    },

    {
        obj_name: "Rubí",
        obj_price: 150000,
        obj_img: "./img/img_products_rubí-outfit",
        obj_category: "Outfit",
        obj_colection: "Piedas Preciosas",
        obj_reference: "D1767146",
        obj_color: "Verde Menta",
        obj_isPrinted: false
    },

    {
        obj_name: "Milan",
        obj_price: 120000,
        obj_img: "./img/img_products_milan",
        obj_category: "Vestido",
        obj_colection: "Ciudades",
        obj_reference: "C1465476",
        obj_color: "Blanco",
        obj_isPrinted: false
    }
];

const { user_age, user_email, user_gender, user_name } = user;

stock.forEach( product => {
    const {obj_name: name, obj_price: price, obj_img: img, obj_category: category, obj_colection: colection, obj_reference: reference, obj_color: color, obj_isPrinted: isPrinted} = product;
    if(!isPrinted && price >= 90000){
        console.log(name + " tiene un precio de: $" + price);
    }
})
