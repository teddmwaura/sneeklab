import { displayItems } from "./checkoutDisplay.js";
import { calculateCost } from "../cart/calculateTotalCost.js";


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

    const pickPoint = document.querySelector('.pickup-point').value.trim();
    const phoneNumber = document.querySelector('.phone-number').value.trim();

      const phoneRegex = /^(07\d{8}|01\d{8})$/;
  if (!phoneRegex.test(phoneNumber)) {
    alert('Enter a valid Kenyan phone number');
    return;
  }

    const deliveryOption = document.querySelector(
      'input[name="delivery"]:checked'
    );

    if (!deliveryOption) {
      alert('Please select a delivery option.');
      return;
    }

    const deliveryType = deliveryOption.value; // 'thika' or 'outside'
    const deliveryFee = deliveryType === 'thika' ? 50 : 150;

    const deliveryZoneText =
      deliveryType === 'thika'
        ? 'Along Thika Road'
        : 'Outside Thika Road';

    const productDetails = 'Raised Converse - Black - Size 32 - Qty 2';

    const message = `
NEW ORDER (Cash on Delivery)
---------------------------
Name: ${currentUser.userName}
Phone: ${phoneNumber}
Pickup Point: ${pickPoint}
Delivery Zone: ${deliveryZoneText}
Delivery Fee: ${deliveryFee} KES
Product: ${productDetails}
`;

    console.log(message);

    sendToWhatsApp(message);
    alert('your order has been placed and received, you will get a call shortly')
    checkoutForm.reset()
  });
}


handleCheckoutProcess()
displayItems()
calculateCost()