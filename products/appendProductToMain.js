import { descriptionProductsHTML } from "../scripts/decribeProductsHtml.js";
import { addToCart } from "../cart/cart.js";

function appendToMainWebsite(){
    let products = JSON.parse(localStorage.getItem('products')) || [];

    let accumulatorPattern = ''; // meaning its gonna be a string
    
    products.forEach((product) =>{
        accumulatorPattern += `
<div class="p-4 product-card-html">
        <div class="bg-[#efefef]">
          <img src="${product.productImage}" alt="${product.productName}" class="h-[200px] mb-4 mix-blend-multiply bg-blue-500 img-html-js">
        </div>
        <div>
          <p class="mb-2 text-lg html-product-name">${product.productName}</p>
          <div>
            <input type="text" placeholder="enter size 36 - 42" class="border-b outline-none mb-6 px-2 input-size-html" required>
            <input type="text" placeholder="enter color" class="border-b outline-none mb-2 px-2 input-color-html" required><br>
            <button class="text-gray-500 mb-2 see-more-button-html" data-product-id="${product.productId}">see more....</button>
          </div>
          <p class="mb-2 text-yellow-500 text-lg html-product-price">ksh ${product.productPrice}</p>
          <button class="p-2 bg-[#a52a2a] text-white add-to-cart-button" data-product-id="${product.productId}">
            add to cart
          </button>
        </div>
      </div>
        `;

        const appendContainer = document.querySelector('.products-container-html')

        if(appendContainer){
            appendContainer.innerHTML = accumulatorPattern;
        }
    });
}
appendToMainWebsite()
descriptionProductsHTML()
addToCart()