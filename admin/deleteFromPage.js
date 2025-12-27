import { appendToMainJs } from "./appendToAdminPage.js"


export function deleteFromAdmin(){
    const deleteButtons = document.querySelectorAll('.delete-button-html')

    deleteButtons.forEach((button)=>{
        button.addEventListener('click', ()=>{
            console.log('delete from admin')

            const productId = button.dataset.productId
            let products = JSON.parse(localStorage.getItem('products')) || []

            // find correct product
            const matchingIndex = products.findIndex(p => p.productId === productId)

            if(matchingIndex > -1){
                products.splice(matchingIndex, 1)
            }

            // update localStorage
            localStorage.setItem('products', JSON.stringify(products))

            appendToMainJs()
            deleteFromAdmin()
        })
    })
}
