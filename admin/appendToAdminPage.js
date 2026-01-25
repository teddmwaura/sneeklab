export function appendToMainJs(){
    const products = JSON.parse(localStorage.getItem('products')) || []

    const jsonProducts = window.jsonProducts || [];

    const allProducts = [...jsonProducts, ...products]

    let accumulatorPattern = '';

    allProducts.forEach((product) =>{
        accumulatorPattern +=
        `
    <div class="p-4 rounded-xl bg-white shadow delete-from-page-html">

  <!-- Image -->
  <div class="bg-[#efefef] flex justify-center items-center rounded-lg mb-4">
    <img 
      src="${product.productImage}" 
      alt="${product.productName}" 
      class="h-[140px] sm:h-[160px] md:h-[200px] mix-blend-multiply product-image-html"
    >
  </div>

  <!-- Product Info -->
  <div class="text-center">
    <p class="mb-2 text-base sm:text-md product-html-text">
      ${product.productName}
    </p>

    <p class="mb-4 text-yellow-500 text-base sm:text-md product-price-text">
      Ksh ${product.productPrice}
    </p>

    <button
      class="w-full px-4 py-2 bg-[#a52a2a] text-white text-sm sm:text-base rounded hover:opacity-90 transition delete-button-html"
      data-product-id="${product.productId}"
    >
      Delete Product
    </button>
  </div>

</div>

        `

       
    })
    const productContainer = document.querySelector('.products-container-html')

    if(productContainer){
        productContainer.innerHTML = accumulatorPattern;
    }
}
