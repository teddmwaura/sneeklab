
export function appendToCartPage(){
    const cart = JSON.parse(localStorage.getItem('cart')) || []

    let accumulatorPattern = '';

    cart.forEach((cartItem) =>{
        accumulatorPattern +=
        `
         <div class="grid grid-cols-[200px_1fr] items-center border-b p-4 js-item-html">

                <div class="div-image-html-js">
                    <img src="${cartItem.productImage}" alt="" class="h-[100px] rounded-full border-0 z-[-10] relative">
                </div>

                <div class="grid grid-cols-5 items-center display-grid-js">
                 <div>
                    <h1>${cartItem.productName}</h1>
                </div>
                <div>
                    <h1><span class="text-red-500 ">${cartItem.color}</span></h1>
                    <h1><span class="text-red-500">${cartItem.size}</span></h1>
                </div>
                <div>
                    <h1>${cartItem.productPrice}</h1>
                </div>
                <div class="flex items-center justify-center">

                    <button class="text-md mr-4 add-button-cart-html" data-product-id="${cartItem.productId}">+</button>
                    <h1>${cartItem.quantity}</h1>
                    <button class="text-lg ml-4 minus-add-to-cart-html" data-product-id="${cartItem.productId}">-</button>

                </div>
                <div><button class="close-btn text-lg " data-product-id="${cartItem.productId}">&times;</button></div>
            </div>
                </div>
               
        `
       const renderContainer =  document.querySelector('.js-render-list-html')

       if(renderContainer){
        renderContainer.innerHTML = accumulatorPattern;
       }

    })
}
