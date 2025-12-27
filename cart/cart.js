import { updateQuantityIcon } from "./updateCartIcon.js";
import { showErrorDiv } from "./warningDiv.js";
import { appendToCartPage } from "./appendProductCart.js";
import { calculateTotalCost } from "./calculateTotalPrice.js";
import { removeFromCart } from "./removeFromCart.js";
import { minusCartFromCart } from "./minusCart.js";
import { plusCartFromCart } from "./plusCart.js";

export function addToCart(){
    const products = JSON.parse(localStorage.getItem('products')) || [];

    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');

    addToCartButtons.forEach((button) =>{
        button.addEventListener('click', () =>{
          const color = document.querySelector('.input-color-html').value
          const size = document.querySelector('.input-size-html').value

            document.querySelector('.input-size-html').value = '';
            document.querySelector('.input-color-html').value = ''
         

            if(!size && !color){
                showErrorDiv();
                return
            }

            const productId = button.dataset.productId;

            const matchingItem = products.find(p => p.productId === productId)

           

            const cart = JSON.parse(localStorage.getItem('cart')) || [];

            const cartItem = cart.find(c => c.productId === productId && c.size === size && c.color === color)

            if(cartItem){
                cartItem.quantity += 1;
            }
            else{
                 cart.push({
                    ...matchingItem,
                    size,
                    color,
                    quantity: 1
                })
            }
            console.log(cart)

            localStorage.setItem('cart', JSON.stringify(cart))

            updateQuantityIcon()
                
            
        })
    })
    updateQuantityIcon()
}
appendToCartPage()
calculateTotalCost()
updateQuantityIcon()
removeFromCart()
minusCartFromCart()
plusCartFromCart()