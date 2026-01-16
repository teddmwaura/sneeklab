export function minusFromCart(){
    const minusButton = document.querySelectorAll('.minus-button-html')
    const cart = JSON.parse(localStorage.getItem('cart'))  || [];

    minusButton.forEach((button) =>{
        button.addEventListener('click', ()=>{
         console.log('minus from cart')
           
            const productId = button.dataset.productId

         const minusProduct = cart.findIndex(p => p.productId === productId)

         if(minusProduct === -1){
            return
         }

         if(cart[minusProduct].quantity > 1){
            cart[minusProduct].quantity -= 1
         }
         else{
            cart.splice(minusProduct, 1)
         }
         localStorage.setItem('cart', JSON.stringify(cart))
        })
    })
}