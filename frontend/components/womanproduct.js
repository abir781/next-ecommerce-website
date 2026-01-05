
const brandfilter = document.getElementById("brandfilter");
function womenProductbyall(sortbybrand) {
    if(sortbybrand==="All"){
          fetch("http://localhost:3000/womanproduct")
    .then(res => res.json())
    .then(products => {

        renderwoman(products);
     
    })
    .catch(error => {
      console.error("Error fetching products:", error);
    });

    }
    else{
       fetch(`http://localhost:3000/womanproduct/brand/${sortbybrand}`)
      .then(res => res.json())
      .then(products => {
        renderwoman(products);
      })
      .catch(error => console.error(error));
    }

        
  
}

function renderwoman(products){
     const container = document.getElementById("women-products");
      
      container.innerHTML = "";

      // Filter only Women Pajamas
      const womenProducts = products.filter(
        product => product.category === "Women Pajamas"
      );

      // Responsive grid container
      container.className =
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 max-w-11/12 mx-auto ";

      // Create cards
      womenProducts.forEach(product => {
        const card = document.createElement("div");
        card.className =
          "group relative border border-gray-200 rounded-lg overflow-hidden bg-white transition-all duration-300 hover:shadow-lg cursor-pointer flex flex-col ";

        // Fallback image if imagelink missing
        const imgSrc =
          product.imagelink ||
          "https://via.placeholder.com/280x280.png?text=No+Image";

        card.innerHTML = `
          <!-- Image Container -->
          <div class="relative w-full h-[280px] overflow-hidden bg-gray-100">
            <img src="${imgSrc}" 
                 alt="${product.name}" 
                 class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
            
            <!-- Wishlist Heart Icon -->
            <button class="absolute top-3 right-3 bg-white border-none rounded-full w-8 h-8 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg transition-all opacity-0 group-hover:opacity-100 z-10">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          </div>
          
          <!-- Product Info -->
          <div class="flex flex-col p-3 flex-grow">
            <h3 class="text-sm font-medium text-gray-800 leading-tight line-clamp-2 mb-2">
              ${product.name}
            </h3>

            <!-- Price -->
            <div class="mt-auto">
              <div class="flex items-center mb-2">
                <span class="text-base font-bold text-black">৳${product.price}</span>
              </div>

              <!-- Star Rating -->
              <div class="flex items-center gap-1 mb-2">
                <div class="flex gap-0.5 text-yellow-400 text-xs">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span class="text-gray-300">★</span>
                </div>
                <span class="text-xs text-gray-500">(4.0)</span>
              </div>

              <!-- Color Options (static example) -->
              <div class="flex gap-2 mt-2">
                <div class="w-5 h-5 rounded-full bg-black border border-gray-300 cursor-pointer hover:border-gray-500 transition-colors"></div>
                <div class="w-5 h-5 rounded-full bg-pink-200 border border-gray-300 cursor-pointer hover:border-gray-500 transition-colors"></div>
                <div class="w-5 h-5 rounded-full bg-blue-500 border border-gray-300 cursor-pointer hover:border-gray-500 transition-colors"></div>
              </div>
            </div>
          </div>
        `;

        container.appendChild(card);
      });
}

 fetch("http://localhost:3000/womanproduct")
    .then(res => res.json())
    .then(products => {

        renderwoman(products);
     
    })
    .catch(error => {
      console.error("Error fetching products:", error);
    });



// Call the function
// womenProductbyall();

