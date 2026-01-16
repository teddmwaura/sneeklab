export function removeFromCart(){
   const cart = JSON.parse(localStorage.getItem('cart')) || [];

   const deleteButtons = document.querySelectorAll('.remove-from-cart')

   deleteButtons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        const productId = button.dataset.productId
        console.log(productId)

    const cartItem = cart.findIndex(p => p.productId === productId)

    if(cartItem > -1){
        cart.splice(cartItem, 1)
    }

        localStorage.setItem('cart', JSON.stringify(cart))

        console.log(cart)
         window.location.reload();
    })
   })
}