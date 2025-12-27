export function showErrorDiv(){
       const container = document.querySelector('.div-container-error')

       container.classList.remove('hidden')

       setTimeout(() =>{
        container.classList.add('hidden')
       }, 2000)
}