
import { removeFromCart } from "./removeFromCart.js";

export function renderToCart(){
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    let accumulatorPattern = '';

    cart.forEach((cartItem)=>{
      accumulatorPattern +=  `
      
         <div>
        <div class="text-center"><i class="fa-solid fa-trash text-lg text-gray-500 cursor-pointer remove-from-cart" data-product-id=${cartItem.productId}></i></div>
    </div>
    <div>
        <div><img src="${cartItem.productImage}" alt="" class="h-[100px] rounded-lg"></div>
    </div>
    <div>
        <h2>${cartItem.productName}</h2>
    </div>
    <div>
        <h2>Ksh ${cartItem.productPrice}</h2>
    </div>
       <div>
        <h2>${cartItem.color}</h2>
    </div>
       <div>
        <h2>${cartItem.size}</h2>
    </div>
    <div class="flex">
        <h2 class="cursor-pointer mr-3 plus-button-html">+</h2>
        <h2 class="update-data-html">${cartItem.quantity}</h2>
        <h2 class="cursor-pointer ml-3 minus-button-html">-</h2>
    </div>
    
        `
    })

    const renderToMainHtml = document.querySelector('.render-product-html')

    if(renderToMainHtml){
        renderToMainHtml.innerHTML = accumulatorPattern;
    }
   removeFromCart()

}