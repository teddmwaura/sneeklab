import { updatingUi } from "./renderUpdateUI.JS";

export function plusCartFromCart(){
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const allPlusButtons = document.querySelectorAll('.add-button-cart-html')

    allPlusButtons.forEach((button) =>{
        button.addEventListener('click', () =>{
            const productId = button.dataset.productId

            const increaseQTY = cart.find(p => p.productId === productId)

            if(increaseQTY && increaseQTY.quantity > 0){
                increaseQTY.quantity += 1;
            }

            localStorage.setItem('cart', JSON.stringify(cart))

           updatingUi();
        })
    })
   
}