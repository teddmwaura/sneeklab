export function appendToMainJs(){
    const products = JSON.parse(localStorage.getItem('products')) || []

    let accumulatorPattern = '';

    products.forEach((product) =>{
        accumulatorPattern +=
        `
                <div class="p-4 delete-from-page-html">
          <div class="bg-[#efefef]">
            <img src="${product.productImage}" alt="" class="h-[200px] mb-4 mix-blend-multiply bg-blue-500 product-image-html">
          </div>
          <div>
            <p class="mb-2 text-lg product-html-text">${product.productName}</p>
            <p class="mb-2 text-yellow-500 text-lg product-price-text">${product.productPrice}</p>
            <button 
              class="p-2 bg-[#a52a2a] text-white delete-button-html" 
              data-product-id="${product.productId}">
              delete product
            </button>
          </div>
        </div>
        `

        const productContainer = document.querySelector('.products-container-html')

        if(productContainer){
            productContainer.innerHTML = accumulatorPattern;
        }
    })
}
