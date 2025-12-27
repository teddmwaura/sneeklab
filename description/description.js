export function describeProductPage(){
    console.log('hello world')
   const product = JSON.parse(localStorage.getItem('selectedProduct'))

   if(!product){
    console.log('no product found')
   }

     const displayDescriptionProduct = document.querySelector('.grid-contain-html')


displayDescriptionProduct.innerHTML = `
                     <div class="ml-8 flex items-center justify-center">
            <img src="${product.productImage}" alt="${product.productName}" class="h-[400px] mix-blend-multiply rounded-2xl image-product-image-js-html">
          </div>

            <div>
              <h1 class="text-2xl  mb-2">${product.productName}</h1>
              <p class="text-gray-600 w-[400px]">
                Step up your look with these ${product.productName} — crafted with durable canvas and a thick sole that adds just the right amount of height. 
                Perfect for casual days, night hangouts, or that clean streetwear vibe. Stylish, comfy, and timeless.
              </p>
               <p class="mt-2 text-red-500 text-lg">ksh ${product.productPrice}</p>
            </div>
                    `
}
describeProductPage();