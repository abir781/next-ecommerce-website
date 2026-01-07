function addToBag(product) {
  // 1️⃣ Read existing cart
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // 2️⃣ Check if product already exists
  const existingProductIndex = cart.findIndex(
    p => p._id === product._id
  );

  if (existingProductIndex !== -1) {
    cart[existingProductIndex].quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  // 3️⃣ Save updated cart
  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`${product.name} added to bag 🛒`);
  console.log(cart);
}

document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");
  const productholder = document.getElementById("product-container");

  if (!productId) {
    productholder.innerHTML = "<p>No data found</p>";
    return;
  }

  try {
    // ✅ FIXED URL (single slash + correct variable)
    const res = await fetch(
      `http://localhost:3000/womanproduct/${productId}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch product");
    }

    const product = await res.json();

    if (!product) {
      productholder.innerHTML = "<p>Product not found</p>";
      return;
    }

    // ✅ Render product UI
    productholder.innerHTML = `
      <div class="flex flex-col md:flex-row gap-10">

        <!-- Left -->
        <div class="w-full md:w-1/2 bg-gray-100 rounded-lg overflow-hidden">
          <img 
            src="${product.imagelink}" 
            alt="${product.name}" 
            class="w-full h-[500px] object-cover"
          >
        </div>

        <!-- Right -->
        <div class="flex flex-col gap-4 md:w-1/2">
          <h1 class="text-2xl font-semibold text-gray-900">
            ${product.name}
          </h1>

          <p class="text-xl font-bold text-black">
            ৳${product.price}
          </p>

          <div class="text-sm text-gray-700 space-y-1">
            <p><strong>Brand:</strong> ${product.brand}</p>
            <p><strong>Material:</strong> ${product.material}</p>
            <p><strong>Color:</strong> ${product.color}</p>
            <p><strong>Style:</strong> ${product.style}</p>
            <p><strong>Category:</strong> ${product.category}</p>
          </div>

          <div class="flex items-center gap-4 mt-6">
            <button
              id="add-to-bag-btn"
              class="flex-1 bg-black text-white py-3 rounded-md font-medium hover:bg-gray-900 transition"
            >
              ADD TO BAG
            </button>

            <button
              class="w-12 h-12 border border-gray-300 rounded-md flex items-center justify-center hover:border-black transition"
            >
              ❤️
            </button>
          </div>
        </div>
      </div>
    `;

    // ✅ Button event
    const addToBagBtn = document.getElementById("add-to-bag-btn");
    addToBagBtn.addEventListener("click", () => {
      addToBag(product);
    });

  } catch (error) {
    productholder.innerHTML = "<p>Error loading product</p>";
    console.error(error);
  }
});
