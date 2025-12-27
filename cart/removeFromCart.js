import { calculateTotalCost } from "./calculateTotalPrice.js";
import { updateQuantityIcon } from "./updateCartIcon.js";


export function removeFromCart(){
    const removeButtons = document.querySelectorAll('.close-btn')

    removeButtons.forEach((button)=>{
        button.addEventListener('click', ()=>{
            console.log('deleted item')
             let cart = JSON.parse(localStorage.getItem('cart')) || [];

            const productId = button.dataset.productId

            const cartItem = cart.findIndex(c => c.productId === productId)

            if(cartItem !== -1){
                cart.splice(cartItem, 1)
            }
            localStorage.setItem('cart', JSON.stringify(cart))

            
            calculateTotalCost()
            updateQuantityIcon()
          
         
     
        

        })
    })
   
}
