   import { showMessage } from "../scripts/showMessage.js";
   import { updateQuantityIcon } from "../cart/updateQuantityIcon.js";

   export function describeProductPage() {
  const product = JSON.parse(localStorage.getItem('selectedProduct'));

  if (!product) {
    console.log('No product found');
    return;
  }

  const { productName, productColor } = product;
  const displayDescriptionProduct = document.querySelector('.grid-contain-html');

  // Track selected options
  let selectedColor = productColor[0].name;
  let selectedImage = productColor[0].productImage;
  let selectedPrice = productColor[0].productPrice;
  let selectedSize = null;

  /* CREATE COLOR THUMBNAILS */
  let thumbnailsHTML = '';

  productColor.forEach((color) => {
    thumbnailsHTML += `
      <div class="mr-4 cursor-pointer border-2 border-transparent hover:border-gray-500 transition duration-300 rounded-2xl">
        <img 
          src="${color.productImage}"
          data-image="${color.productImage}"
          data-color="${color.name}"
          data-price="${color.productPrice}"
          class="thumbnail h-[70px] mix-blend-multiply rounded-2xl"
        >
        <div class="text-center"><p>${color.name}</p></div>
      </div>
    `;
  });

  displayDescriptionProduct.innerHTML = `
    <div>
      <!-- MAIN IMAGE -->
      <div class="flex justify-center">
        <img 
          src="${productColor[0].productImage}"
          class="product-main-image h-[250px] sm:h-[300px] md:h-[400px] mix-blend-multiply rounded-2xl"
        >
      </div>

      <!-- THUMBNAILS -->
      <div class="flex justify-center flex-wrap gap-3 mt-4">
        ${thumbnailsHTML}
      </div>
    </div>

    <!-- TEXT CONTENT -->
    <div class="text-center px-4 sm:px-6 md:px-10 max-w-3xl mx-auto">
      <!-- Brand -->
      <h2 class="mb-2 text-lg sm:text-xl texting text1">@SneekLab</h2>
      <!-- Product Name -->
      <h1 class="text-xl sm:text-2xl md:text-3xl mb-3 texting text2">${product.productName}</h1>

      <!-- Reviews -->
      <div class="flex justify-center items-center gap-1 flex-wrap">
        <i class="fa-solid fa-star text-yellow-500"></i>
        <i class="fa-solid fa-star text-yellow-500"></i>
        <i class="fa-solid fa-star text-yellow-500"></i>
        <i class="fa-solid fa-star text-yellow-500"></i>
        <i class="fa-solid fa-star text-gray-400"></i>
        <h2 class="text-gray-400 ml-2 text-sm sm:text-base typing">42 reviews</h2>
      </div>

      <!-- Price -->
      <p class="mt-4 text-red-500 text-2xl sm:text-3xl md:text-4xl product-price">
        Ksh ${productColor[0].productPrice}
      </p>

      <!-- Description -->
      <p class="text-gray-600 text-sm sm:text-base max-w-md mx-auto mt-4 texting text3">
        Step up your look with these ${product.productName} — crafted with durable canvas and a thick sole that adds just the right amount of height. Perfect for casual days, night hangouts, or that clean streetwear vibe. Stylish, comfy, and timeless.
      </p>

      <!-- Sizes -->
      <p class="mt-6 mb-3 font-medium">Size</p>
      <div class="flex justify-center flex-wrap gap-3">
        <div class="size-option p-3 sm:p-4 text-white bg-gray-400 cursor-pointer border-2 border-transparent hover:border-gray-200 transition duration-300 rounded-xl">36</div>
        <div class="size-option p-3 sm:p-4 text-white bg-gray-400 cursor-pointer border-2 border-transparent hover:border-gray-200 transition duration-300 rounded-xl">37</div>
        <div class="size-option p-3 sm:p-4 text-white bg-gray-400 cursor-pointer border-2 border-transparent hover:border-gray-200 transition duration-300 rounded-xl">38</div>
        <div class="size-option p-3 sm:p-4 text-white bg-gray-400 cursor-pointer border-2 border-transparent hover:border-gray-200 transition duration-300 rounded-xl">39</div>
        <div class="size-option p-3 sm:p-4 text-white bg-gray-400 cursor-pointer border-2 border-transparent hover:border-gray-200 transition duration-300 rounded-xl">40</div>
        <div class="size-option p-3 sm:p-4 text-white bg-gray-400 cursor-pointer border-2 border-transparent hover:border-gray-200 transition duration-300 rounded-xl">41</div>
        <div class="size-option p-3 sm:p-4 text-white bg-gray-400 cursor-pointer border-2 border-transparent hover:border-gray-200 transition duration-300 rounded-xl">42</div>
      </div>

      <!-- Button -->
      <div class="mt-8">
        <button class="py-3 px-8 sm:px-12 bg-gray-800 cursor-pointer text-white border-2 border-transparent hover:border-gray-200 transition duration-300 rounded-2xl image-animate w-full sm:w-auto">
          Add to Cart
        </button>
      </div>
    </div>
  `;

  /* IMAGE SWITCH */
  const mainImage = document.querySelector('.product-main-image');
  const thumbnails = document.querySelectorAll('.thumbnail');
  const priceElement = document.querySelector('.product-price');

  thumbnails.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      mainImage.src = thumb.dataset.image;
      priceElement.textContent = `Ksh ${thumb.dataset.price}`;
      selectedColor = thumb.dataset.color;
      selectedImage = thumb.dataset.image;
      selectedPrice = thumb.dataset.price;
    });
  });

  /* SIZE SELECT */
  const sizes = document.querySelectorAll('.size-option');
  sizes.forEach((size) => {
    size.addEventListener('click', () => {
      sizes.forEach((s) => s.classList.remove('bg-black'));
      size.classList.add('bg-black');
      selectedSize = size.textContent;
    });
  });

  /* ADD TO CART */
  const addToCartBtn = document.querySelector('.image-animate');
  addToCartBtn.addEventListener('click', () => {
    if (!selectedSize) {
      showMessage('please select size', 'error')
      return;
    }

    // Get existing cart
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if same product + color + size already exists
    const existingItem = cart.find(
      (item) =>
        item.productName === productName &&
        item.productColor === selectedColor &&
        item.productSize === selectedSize
    );

    if (existingItem) {
      // Increase quantity
      existingItem.quantity += 1;
    } else {
      // Add new item
      const productObject = {
        productName: productName,
        productPrice: selectedPrice,
        productImage: selectedImage,
        productColor: selectedColor,
        productSize: selectedSize,
        quantity: 1,
      };
      cart.push(productObject);
    }

    // Save cart
    localStorage.setItem('cart', JSON.stringify(cart));
    showMessage('product added to cart', 'success')
  });
}
  describeProductPage();
  updateQuantityIcon()