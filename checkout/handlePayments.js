export function calculateTotalPice(){
const button = document.querySelector('.pay-button-submit')
const cart = JSON.parse(localStorage.getItem('cart'))

    
const total = cart.reduce((acc, item) => acc + (item.quantity * item.price), 0);

  // Add 50 to total
  const finalTotal = total + 50

        button.innerHTML = finalTotal;
    
}

export function calculateParcelPrice(){
const button = document.querySelector('.button-parcel-html')
const cart = JSON.parse(localStorage.getItem('cart'))



const total = cart.reduce((acc, item) => acc + (item.quantity * item.price), 0);

  // Add 50 to total
  const finalTotal = total + 150

        button.innerHTML = finalTotal;
    
}