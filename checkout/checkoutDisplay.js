export function displayItems(){
    const cart = JSON.parse(localStorage.getItem('cart')) || []

    let accumulatorPattern = '';

    cart.forEach((product) =>{
        accumulatorPattern +=
        `<img
          src="${product.productImage}"
          class="h-[100px] object-contain"
          alt=""
        />

        <div>
        <p><strong>Product Name:</strong> ${product.productName}</p>
          <p><strong>Product Color:</strong> ${product.color}</p>
          <p><strong>Product Size:</strong> ${product.size}</p>
          <p><strong>Product Quantity:</strong> ${product.quantity}</p>
          </div>
        `

        const container = document.querySelector('.container-contain-html-js')

        if(container){
            container.innerHTML = accumulatorPattern
        }
    })
}