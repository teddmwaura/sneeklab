import { calculateTotalPice } from "./handlePayments.js";
import { calculateParcelPrice } from "./handlePayments.js";

const cart = JSON.parse(localStorage.getItem('cart'))

let acccumulatorPattern = '';

cart.forEach((product) =>{
    acccumulatorPattern +=
    `
                    <div><img src="${product.image}" alt="" class="h-[100px]"></div>
                    <div class="pl-8">
                    <div><h1>${product.name}</h1></div>
                    <div><h1>${product.color}</h1></div>
                    <div><h1>size: ${product.size}</h1></div>
                    <div><h1>Qty: ${product.quantity}</h1></div>
                    </div>
                
    `

    const containerHtml = document.querySelector('.container-contain-html-js')

    if(containerHtml){
        containerHtml.innerHTML = acccumulatorPattern;
    }

    const displayPrice = document.querySelector('.js-display-price')

    if(displayPrice){

        const totalPrice = cart.reduce((sum, item) => sum + (item.quantity * product.price), 0)

        displayPrice.innerHTML = `Amount Payable: ${totalPrice}`
    }
})

calculateTotalPice()
calculateParcelPrice()