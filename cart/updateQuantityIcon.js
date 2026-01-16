export function updateQuantityIcon(){
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        const updateIcon = cart.reduce((sum, item)=>{
            return sum + item.quantity
        }, 0)

const updateToHtml = document.querySelector('.update-cart-quantity-icon')

        if(updateToHtml){
            updateToHtml.innerHTML = updateIcon;
        }
}