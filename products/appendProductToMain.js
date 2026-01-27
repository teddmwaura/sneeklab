import { addToCart } from "../cart/cart.js";
import { descriptionProductsHTML } from "../scripts/decribeProductsHtml.js";
import { updateQuantityIcon } from "../cart/updateQuantityIcon.js";

fetch('./productsSneeklab.json')
  .then(res => res.json())
  .then(data => {
    window.jsonProducts = data;
    appendToMainWebsite(); // 🔥 move it here
    addToCart()
  });

function appendToMainWebsite(){
    let products = JSON.parse(localStorage.getItem('products')) || [];

    const jsonProducts = window.jsonProducts || [];

    const allProducts = [...jsonProducts, ...products]

    let accumulatorPattern = ''; // meaning its gonna be a string
    
    allProducts.forEach((product) =>{
        accumulatorPattern += `
        <div class="p-4 product-card w-full ">
  <div class="bg-[#efefef] flex justify-center items-center">
    <img 
      src="${product.productImage}" 
      alt="${product.productName}" 
      class="h-[160px] sm:h-[180px] md:h-[200px] mb-4 mix-blend-multiply img-html-js"
    >
  </div>

  <div class="mt-2">
    <p class="mb-2 text-base sm:text-md html-product-name">
      ${product.productName}
    </p>

    <!-- inputs -->
    <div class="flex flex-col gap-3 mb-4">
      <input 
        type="text" 
        placeholder="Size (36 - 42)" 
        class="border-b outline-none px-2 py-1 text-sm sm:text-base input-size-html"
        required
      >

      <input 
        type="text" 
        placeholder="Color" 
        class="border-b outline-none px-2 py-1 text-sm sm:text-base input-color-html"
        required
      >

      <button 
        class="text-gray-500 text-sm sm:text-base text-left see-more-button-html"
        data-product-id="${product.productId}"
      >
        see more....
      </button>
    </div>

    <p class="mb-3 text-yellow-500 text-base sm:text-lg html-product-price">
      Ksh ${product.productPrice}
    </p>

    <button 
      class="w-full sm:w-auto px-4 py-2 bg-[#a52a2a] text-white text-sm sm:text-base rounded add-to-cart-button"
      data-product-id="${product.productId}"
    >
      add to cart
    </button>
  </div>
</div>

        `;  
    });
    const appendContainer = document.querySelector('.products-container-html')

    if(appendContainer){
        appendContainer.innerHTML = accumulatorPattern;
    }
}
descriptionProductsHTML()
updateQuantityIcon()