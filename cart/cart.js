import { updateQuantityIcon } from "./updateQuantityIcon.js";
import { renderToCart } from "./renderToCart.js";
import { calculateCost } from "./calculateTotalCost.js";
import { removeFromCart } from "./removeFromCart.js";
import { minusFromCart } from "./minusFromCart.js";
import { plusFromCart } from "./plusCart.js";
import { updateUserName } from "../scripts/updateUserName.js";

fetch('./productsSneeklab.json')
  .then(res => res.json())
  .then(data => {
    window.jsonProducts = data;
    addToCart()
  });

export function addToCart() {
  const products = JSON.parse(localStorage.getItem('products')) || [];
  const jsonProducts = window.jsonProducts || [];



  const allProducts = [...jsonProducts, ...products];

  const addToCartButtons =
    document.querySelectorAll('.add-to-cart-button');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      console.log('add to cart button')
      const productId = Number(button.dataset.productId); // ✅ FIX 
      console.log(productId)

      const productCard = button.closest('.product-card');
      const sizeInput = productCard.querySelector('.input-size-html');
      const colorInput = productCard.querySelector('.input-color-html');

      const size = sizeInput.value.trim();
      const color = colorInput.value.trim();

      if (!size || !color) {
        alert('Please select size and color');
        return;
      }

      const validSizes = ['36','37','38','39','40','41','42'];
      if (!validSizes.includes(size)) {
        alert('Please enter a valid size');
        return;
      }

      const product = allProducts.find(
        p => String(p.productId) === String(productId)
      );
      
      if (!product) {
        console.log('Product not found');
        return;
      }

      const cart = JSON.parse(localStorage.getItem('cart')) || [];

      const cartItem = cart.find(item =>
        item.productId === productId &&
        item.size === size &&
        item.color === color
      );

      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        cart.push({
          ...product,        // ✅ FIX 2
          size,
          color,
          quantity: 1
        });
      }

      localStorage.setItem('cart', JSON.stringify(cart));

      sizeInput.value = '';
      colorInput.value = '';

      updateQuantityIcon();
    });
  });
}

renderToCart();
updateQuantityIcon();
calculateCost();
removeFromCart();
minusFromCart();
plusFromCart()
updateUserName()