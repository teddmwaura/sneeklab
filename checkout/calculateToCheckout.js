export function calculateToCheckoutJs() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    const deliveryRadios = document.querySelectorAll('input[name="delivery"]');
    const checkoutTotal = document.querySelector('.js-display-price');
    const jsContainer = document.querySelector('.js-container-html')
  
    // Calculate products total
    const productsTotal = cart.reduce((sum, item) => {
      return sum + (item.quantity * item.productPrice);
    }, 0);
  
    // Default delivery cost
    let deliveryCost = 0;
  
    // Listen for delivery option change
    deliveryRadios.forEach((radio) => {
      radio.addEventListener('change', () => {
        if (radio.value === 'thika') {
          deliveryCost = 50;
        } else if (radio.value === 'outside') {
          deliveryCost = 150;
        }
  
        updateTotal();
      });
    });
  
    function updateTotal() {
      const totalAmount = productsTotal + deliveryCost;
  
      if (checkoutTotal) {
        checkoutTotal.textContent = `Amount Payable: Ksh ${totalAmount}`;
      }
      if (jsContainer) {
        jsContainer.textContent = `Amount Payable: Ksh ${totalAmount}`;
      }

    }
  
    // Initial display (products only)
    updateTotal();
  }
  