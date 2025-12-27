import { updateQuantityIcon } from "./updateCartIcon.js";
import { appendToCartPage } from "./appendProductCart.js";
import { calculateTotalCost } from "./calculateTotalPrice.js";
import { removeFromCart } from "./removeFromCart.js";
import { minusCartFromCart } from "./minusCart.js";
import { plusCartFromCart } from "./plusCart.js";


export function updatingUi(){
appendToCartPage()
calculateTotalCost()
updateQuantityIcon()
removeFromCart()
minusCartFromCart()
plusCartFromCart()
}