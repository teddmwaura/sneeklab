import { displayItems } from "./checkoutDisplay.js";
import { calculateToCheckoutJs } from "./calculateToCheckout.js";
import { updateUserName } from "../scripts/updateUserName.js";

function sendToWhatsApp(message) {
  const businessNumber = '254742037243';
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${businessNumber}?text=${encodedMessage}`;
  window.open(whatsappURL, '_blank');
}

function handleCheckoutProcess() {
  const checkoutForm = document.querySelector('.checkout-form');
  if (!checkoutForm) return;

  checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser || !currentUser.userName) {
      alert('Please login first before proceeding to checkout.');
      return;
    }

    const pickupPoint = document.querySelector('.pickup-point').value.trim();
    const phoneNumber = document.querySelector('.phone-number').value.trim();

    const phoneRegex = /^(07\d{8}|01\d{8})$/;
    if (!phoneRegex.test(phoneNumber)) {
      alert('Enter a valid Kenyan phone number');
      return;
    }

    const deliveryOption = document.querySelector('input[name="delivery"]:checked');
    if (!deliveryOption) {
      alert('Please select a delivery option.');
      return;
    }

    const deliveryFee = deliveryOption.value === 'thika' ? 50 : 150;
    const deliveryZoneText =
      deliveryOption.value === 'thika'
        ? 'Along Thika Road'
        : 'Outside Thika Road';

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
      alert('Your cart is empty.');
      return;
    }

    const productDetails = cart
      .map((item, index) => {
        return `${index + 1}. ${item.productName}
   Color: ${item.color}
   Size: ${item.size}
   Quantity: ${item.quantity}
   Subtotal: Ksh ${item.productPrice * item.quantity}`;
      })
      .join('\n');

    const productsTotal = cart.reduce((sum, item) => {
      return sum + item.productPrice * item.quantity;
    }, 0);

    const grandTotal = productsTotal + deliveryFee;

    const message = `
NEW ORDER (Cash on Delivery)
---------------------------
Name: ${currentUser.userName}
Phone: ${phoneNumber}
Pickup Point: ${pickupPoint}
Delivery Zone: ${deliveryZoneText}
Delivery Fee: ${deliveryFee} KES

PRODUCTS:
${productDetails}

Products Total: Ksh ${productsTotal}
TOTAL PAYABLE: Ksh ${grandTotal}
`;

console.log(message)

    sendToWhatsApp(message);

    alert('Your order has been placed successfully. You will receive a call shortly.');

    localStorage.removeItem('cart');
    checkoutForm.reset();
  });
}



handleCheckoutProcess()
displayItems()
calculateToCheckoutJs()
updateUserName()