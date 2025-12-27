
export function descriptionProductsHTML(){
const seeMoreButtons = document.querySelectorAll('.see-more-button-html');


seeMoreButtons.forEach((button)=>{
  button.addEventListener('click', () =>{
    
    const products = JSON.parse(localStorage.getItem('products'))

    const productId = button.dataset.productId

    const matchingItem = products.find(p => p.productId === productId)

    console.log(matchingItem)
    if(matchingItem){
     localStorage.setItem('selectedProduct', JSON.stringify(matchingItem))
    }

   window.location.href='description.html';
  })
})



}