const colorFilter = document.getElementById("brandFilter"); // maybe rename to colorFilter

function menProductbyall(selectedColor) {
    if(selectedColor === "All") {
        fetch("http://localhost:3000/menproduct")
        .then(res => res.json())
        .then(products => {
            renderman(products);
        })
        .catch(error => console.error(error));
    } else {
        fetch(`http://localhost:3000/menproduct/color/${selectedColor}`)
        .then(res => res.json())
        .then(products => {
            renderman(products);
        })
        .catch(error => console.error(error));
    }
}

function renderman(products) {
    const container = document.getElementById("men-products"); // updated ID


    container.innerHTML = "";

    

    // Optional: filter for category "Men Pajamas"
    const menProducts = products.filter(
        product => product.category === "Men Pajamas"
    );

    container.className =
      "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 max-w-11/12 mx-auto";

    

    menProducts.forEach(product => {
        const card = document.createElement("div");
          
       
        card.className =
          "group relative border border-gray-200 rounded-lg overflow-hidden bg-white transition-all duration-300 hover:shadow-lg cursor-pointer flex flex-col";

        const imgSrc = product.imagelink || "https://via.placeholder.com/280x280.png?text=No+Image";

        card.innerHTML = `
          <div class="relative w-full h-[280px] overflow-hidden bg-gray-100">
            <img src="${imgSrc}" 
                 alt="${product.name}" 
                 class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
          </div>
          <div class="flex flex-col p-3 flex-grow">
            <h3 class="text-sm font-medium text-gray-800 leading-tight line-clamp-2 mb-2">
              ${product.name}
            </h3>
            <div class="mt-auto">
              <div class="flex items-center mb-2">
                <span class="text-base font-bold text-black">৳${product.price}</span>
              </div>
            </div>
          </div>
        `;
         const anchor = document.createElement("a");
        anchor.href = `/product.html?id=${product._id}`;
        anchor.appendChild(card);
        container.appendChild(anchor);
    });
}

// Initial fetch
fetch("http://localhost:3000/menproduct")
    .then(res => res.json())
    .then(products => renderman(products))
    .catch(error => console.error(error));
