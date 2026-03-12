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
      class="h-[120px] sm:h-[100px] md:h-[200px] mb-4 mix-blend-multiply img-html-js"
    data-aos="zoom-in">
  </div>

  <div class="mt-2">
    <p class="mb-2 text-base sm:text-md html-product-name">
      ${product.productName}
    </p>

    <!-- inputs -->
    <div class="flex flex-col gap-3 mb-4">
    <button 
        class="text-gray-500 text-sm sm:text-base text-left see-more-button-html"
        data-product-id="${product.productId}"
      >
        see more....
      </button>
    </div>
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