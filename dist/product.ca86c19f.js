var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},i={},c=n.parcelRequirefc9c;null==c&&((c=function(n){if(n in e)return e[n].exports;if(n in i){var c=i[n];delete i[n];var t={id:n,exports:{}};return e[n]=t,c.call(t.exports,t,t.exports),t.exports}var s=new Error("Cannot find module '"+n+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(n,e){i[n]=e},n.parcelRequirefc9c=c);var t=c("6QD2Y"),s=c("etBjH");const r=document.getElementById("productInfo"),o=document.getElementById("productAsset");!async function(){try{const n=function(n){try{const e=window.location.search;return new URLSearchParams(e).get(n)}catch(n){console.log(n)}}("id"),e=await async function(n,e){try{const i=s.doc(n,"products",e);return(await s.getDoc(i)).data()}catch(n){console.log(n)}}(t.db,n);!function(n){let e=0;e=2===n.product_img.length?2:3===n.product_img.length?3:4===n.product_img.length?4:1;switch(e){case 1:o.innerHTML=`\n                <div>\n                    <ul class="product__imgArray flex">\n                        <li class="imgResponsive">\n                            \n                        </li>\n                        <li class="imgResponsive">\n                            \n                        </li>\n                        <li class="imgResponsive">\n                           \n                        </li>\n                    </ul>\n                </div>\n\n                <img src="${n.product_img[0]}">\n            `;break;case 2:o.innerHTML=`\n                <div>\n                    <ul class="product__imgArray flex">\n                        <li class="imgResponsive">\n                            <img src="${n.product_img[1]}">\n                        </li>\n                        <li class="imgResponsive">\n                            \n                        </li>\n                        <li class="imgResponsive">\n                            \n                        </li>\n                    </ul>\n                </div>\n\n                <img src="${n.product_img[0]}">\n            `;break;case 3:o.innerHTML=`\n                <div>\n                    <ul class="product__imgArray flex">\n                        <li class="imgResponsive">\n                            <img src="${n.product_img[1]}">\n                        </li>\n                        <li class="imgResponsive">\n                            <img src="${n.product_img[2]}">\n                        </li>\n                        <li class="imgResponsive">\n                            \n                        </li>\n                    </ul>\n                </div>\n\n                <img src="${n.product_img[0]}">\n            `;break;case 4:o.innerHTML=`\n                <div>\n                    <ul class="product__imgArray flex">\n                    <li class="imgResponsive">\n                    <img src="${n.product_img[1]}">\n                </li>\n                <li class="imgResponsive">\n                    <img src="${n.product_img[2]}">\n                </li>\n                        <li class="imgResponsive">\n                        <img src="${n.product_img[3]}">\n                        </li>\n                    </ul>\n                </div>\n\n                <img src="${n.product_img[0]}">\n            `}let i=1;r.innerHTML=`\n        <h1 class="product__name">${n.product_name}</h1>\n        <h2 class="product__price">$${n.product_price}</h2>\n        <h4 class="product__color">${n.product_color}</h4>\n        <h5 class="product__reference">${n.product_reference}</h5>\n        <div class="product__countBtn flex">\n            <button class="subButton"> - </button>\n            <h4 class="counter">${i}</h4>\n            <button class="addButton"> + </button>\n        </div>\n        <button class="product__cart">Añadir al carrito</button>\n    `;const c=r.querySelector(".counter");r.querySelector(".addButton").addEventListener("click",(n=>{i++,c.innerText=i}));r.querySelector(".subButton").addEventListener("click",(n=>{i>1&&(i--,c.innerText=i)}))}({...e,id:n})}catch(n){console.log(n)}}();
//# sourceMappingURL=product.ca86c19f.js.map