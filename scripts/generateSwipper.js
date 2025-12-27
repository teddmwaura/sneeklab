export function swiperProductJs(){
const products = [{
    image:'https://images.meesho.com/images/products/501636666/rii8x_512.webp?width=512',
    description: 'Step into style and comfort with sneakers built to keep up with your hustle. Lightweight, durable, and designed for everyday confidence—these kicks arent just shoes theyre your lifestyle'
},
{
    image:'https://img.joomcdn.net/c5dc8f9e27b06bc0fde186dc991863e77c28922c_original.jpeg',
    description: 'Not just sneakers, but a lifestyle. Lightweight, durable, and made for dream chasers who never stop moving'
},
{
    image:'https://www.rickygiftshop.co.ke/wp-content/uploads/2022/07/158852577_1815094648659276_2072170464058134820_n.jpg',
    description: 'Sneakers that move with you — built for comfort, designed for confidence. Step up your style and own every stride'
},

]
let accumulatorPattern = '';

products.forEach((product) =>{
    accumulatorPattern +=
    `
     <div class="swiper-slide">
        <div class="grid grid-cols-2 pt-[7rem] div-top-html-contain">
            <div class="flex flex-col items-center justify-center">
                <h1 class="text-[60px] mb-[1rem] description">Brand New<br>Collection</h1>
                <p class="w-[500px] mb-[2rem] topic">${product.description}</p>

                <div class="flex div-flex-contain-html">
                  <p class="flex items-center gap-2 ml-6 des">
                        <i class="fas fa-check text-green-600"></i>top brands
                    </p>
                    <p class="flex items-center gap-2 ml-6 par">
                        <i class="fas fa-check text-green-600"></i>high quality
                    </p>
                    <p class="flex items-center gap-2 ml-6 box">
                        <i class="fas fa-check text-green-600"></i>free delivery
                    <button class="border-b outline-none ml-6"><a href="admin.html">admin</a></button>    
                        </p>
                </div>
                <div class="text-center p-4 mt-[1rem] div-button-html-contains">
                    <button class="p-4 bg-[#a52a2a] text-white button-shop-html">Explore Shop</button>
                </div>
                
            </div>

            <div class="div-img-html-contain">
                <img src="${product.image}" alt="" class="rounded-full border-0 img-product-image">
            </div>
    
        </div>
    </div>
    `
})

const heroContainer = document.querySelector('.swiper-wrapper');

if(heroContainer){
    heroContainer.innerHTML = accumulatorPattern;
}


}


