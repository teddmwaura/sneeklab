export function calculateTotalCost(){
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const cartTotalPrice = cart.reduce((sum, item) => {
      const price = Number(item.productPrice)
      const qty = Number(item.quantity)
      return sum + (price * qty)
    
}, 0)

    const displayPrice = document.querySelector('.js-total-price-html')

    if(displayPrice){
        displayPrice.innerHTML = `ksh ${cartTotalPrice.toLocaleString()}`
    }

}