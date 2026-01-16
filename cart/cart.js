import { updateQuantityIcon } from "./updateQuantityIcon.js";
import { renderToCart } from "./renderToCart.js";
import { calculateCost } from "./calculateTotalCost.js";
import { removeFromCart } from "./removeFromCart.js";
import { minusFromCart } from "./minusFromCart.js";
import { plusFromCart } from "./plusCart.js";


export function addToCart(){
    const products = JSON.parse(localStorage.getItem('products')) || [];

    const addToCartButtons = document.querySelectorAll('.add-to-cart-button')

addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
   

    const productId = button.dataset.productId;

    const productCard = button.closest('.product-card')
    const sizeInput = productCard.querySelector('.input-size-html');
    const colorInput = productCard.querySelector('.input-color-html');

    const size = sizeInput.value.trim();
    const color = colorInput.value.trim();

    // 1️⃣ Validate inputs
    if (!size || !color) {
      alert('Please select size and color');
      return;
    }

    const validSizes = ['36', '37', '38', '39', '40', '41', '42'];
    if (!validSizes.includes(size)) {
      alert('Please enter a valid size');
      return;
    }

    // 2️⃣ Find product
    const product = products.find(p => p.productId === productId);
    if (!product) return;

    // 3️⃣ Get cart
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // 4️⃣ Check if same product + size + color exists
    const cartItem = cart.find(item =>
      item.productId === productId &&
      item.size === size &&
      item.color === color
    );

    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cart.push({
        ...product,
        size,
        color,
        quantity: 1
      });
    }

    // 5️⃣ Save cart
    localStorage.setItem('cart', JSON.stringify(cart));

    // 6️⃣ Reset inputs
    sizeInput.value = '';
    colorInput.value = '';

    updateQuantityIcon()
  });
});

}
renderToCart()
updateQuantityIcon()
calculateCost()
removeFromCart()
minusFromCart()
plusFromCart()