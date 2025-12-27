import { updatingUi } from "./renderUpdateUI.JS";

export function minusCartFromCart(){
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const allMinusButtons = document.querySelectorAll('.minus-add-to-cart-html')

    allMinusButtons.forEach((button) =>{
        button.addEventListener('click', () =>{
            const productId = button.dataset.productId

            const increaseQTY = cart.find(p => p.productId === productId)

            if(increaseQTY && increaseQTY.quantity > 1){
                increaseQTY.quantity -= 1;
            }

            localStorage.setItem('cart', JSON.stringify(cart))

          updatingUi()
        })
    })
   
}