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
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-7 px-4 md:px-12 div-top-html-contain">

    <!-- TEXT CONTENT -->
    <div class="flex flex-col items-center lg:items-start justify-center text-center lg:text-left">

      <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] mb-4 description">
        Brand New <br /> Collection
      </h1>

      <p class="max-w-xl mb-6 text-gray-700 topic">
        ${product.description}
      </p>

      <!-- FEATURES -->
      <div class="flex flex-wrap justify-center lg:justify-start gap-4 div-flex-contain-html">
        <p class="flex items-center gap-2 des">
          <i class="fas fa-check text-green-600"></i> top brands
        </p>

        <p class="flex items-center gap-2 par">
          <i class="fas fa-check text-green-600"></i> high quality
        </p>

        <p class="flex items-center gap-2 box">
          <i class="fas fa-check text-green-600"></i> free delivery
        </p>
      </div>

      <!-- BUTTON -->
      <div class="mt-6 div-button-html-contains">
        <button class="px-6 py-3 bg-[#a52a2a] text-white rounded-md button-shop-html">
          Explore Shop
        </button>
      </div>

    </div>

    <!-- IMAGE -->
    <div class="flex justify-center lg:justify-end div-img-html-contain">
      <img
        src="${product.image}"
        alt=""
        class="w-[220px] sm:w-[280px] md:w-[350px] lg:w-[420px] rounded-full img-product-image"
      />
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


