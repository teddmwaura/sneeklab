export function describeProductPage(){
    console.log('hello world')
   const product = JSON.parse(localStorage.getItem('selectedProduct'))

   if(!product){
    console.log('no product found')
   }

     const displayDescriptionProduct = document.querySelector('.grid-contain-html')


displayDescriptionProduct.innerHTML = `
         

  <!-- Image -->
  <div class="flex justify-center">
    <img 
      src="${product.productImage}" 
      alt="${product.productName}" 
      class="h-[250px] sm:h-[300px] md:h-[400px] mix-blend-multiply rounded-2xl image-product-image-js-html"
    >
  </div>

  <!-- Text content -->
  <div class="text-center">
    <h1 class="text-xl sm:text-2xl mb-3">
      ${product.productName}
    </h1>

    <p class="text-gray-600 text-sm sm:text-base max-w-md mx-auto md:mx-0">
      Step up your look with these ${product.productName} — crafted with durable canvas and a thick sole that adds just the right amount of height.
      Perfect for casual days, night hangouts, or that clean streetwear vibe. Stylish, comfy, and timeless.
    </p>

    <p class="mt-4 text-red-500 text-base sm:text-lg font-semibold">
      Ksh ${product.productPrice}
    </p>
  </div>


                    `
}
describeProductPage();