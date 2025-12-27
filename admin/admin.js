import { generateProductId } from "./generateUniqueId.js"
import { appendToMainJs } from "./appendToAdminPage.js"
import { deleteFromAdmin } from "./deleteFromPage.js"
import { handleToggleButton } from "./toggleMenuButton.js"

function addProductToAdmin(){
    const productForm = document.querySelector('.product-form')

    productForm.addEventListener('submit', (e)=>{
        e.preventDefault()

        const productName = document.querySelector('.name').value
        const productPrice = document.querySelector('.price').value
        const productImage = document.querySelector('.image').value

        const products = JSON.parse(localStorage.getItem('products'))  || [];

        if(!productImage || !productName || !productPrice){
            return;
        }

        const product = {
            productId: generateProductId(),
            productName,
            productPrice,
            productImage
        }

        products.push(product)

        localStorage.setItem('products', JSON.stringify(products));

        // 🔥 refresh UI instantly
        appendToMainJs();

        productForm.reset()
    })

    // also load products on page load
    appendToMainJs()
}

addProductToAdmin()
deleteFromAdmin()
handleToggleButton()
