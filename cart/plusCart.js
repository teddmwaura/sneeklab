
import { renderToCart } from "./renderToCart.js";

export function plusFromCart() {
  const plusButtons = document.querySelectorAll('.plus-button-html');
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  plusButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;

      const itemIndex = cart.findIndex(
        item => item.productId === productId
      );

      if (itemIndex === -1) return;

      // ✅ Increase quantity
      cart[itemIndex].quantity += 1;

      localStorage.setItem('cart', JSON.stringify(cart));
      renderToCart();
    });
  });
}
