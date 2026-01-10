const shoppingDiv = document.getElementById("shopping");
renderbag();

function renderbag() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    shoppingDiv.innerHTML = "<p>Cart empty</p>";
    return;
  }

  // ✅ calculate total (ONLY calculation)
  const total = cart.reduce((sum, item) => {
    return sum + Number(item.price);
  }, 0);

  // ✅ render UI (ONLY rendering)
  shoppingDiv.innerHTML = `
    <div style="max-width:900px; margin:auto; display:flex; gap:40px;">

      <!-- LEFT -->
      <div style="flex:2;">
        ${cart.map(item => `
          <div style="
            display:flex;
            justify-content:space-between;
            padding:16px 0;
            border-bottom:1px solid #ddd;
          ">
            
            <div style="display:flex; gap:16px;">
              <img src="${item.imagelink}" style="width:90px; object-fit:cover;" />
              <div>
                <h3 style="margin:0 0 6px; font-size:16px;">
                  ${item.name}
                </h3>
                <p style="margin:0; color:#666; font-size:14px;">
                  In Stock
                </p>
              </div>
            </div>

            <div>
              <div style="font-weight:600;">৳${item.price}</div>
              <button
                class="bg-sky-500 px-3 py-1 rounded-sm text-white font-bold"
                onclick="removeItem('${item._id}')"
              >
                Remove
              </button>
            </div>
          </div>
        `).join("")}

        <p style="text-align:right; font-weight:600;">
          Total: ৳${total}
        </p>
      </div>

      <!-- RIGHT -->
      <div style="
        flex:1;
        border:1px solid #ddd;
        padding:20px;
        height:fit-content;
      ">
        <h3>Total</h3>
        <p style="font-size:20px; font-weight:700;">৳${total}</p>

    <button style="
          width:100%;
          padding:12px;
          background:black;
          color:white;
          border:none;
          font-size:16px;
          cursor:pointer;
        "
        onclick="goToCheckout()">
  CHECKOUT
</button>
      </div>

    </div>
  `;
}



    function removeItem(id) {
   
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // 2️⃣ Find the index of the item to remove
    const index = cart.findIndex(item => item._id === id);

    // 3️⃣ Remove the item if found
    if (index !== -1) {
        cart.splice(index, 1); // modifies the existing array in-place
        // 4️⃣ Save the updated cart back to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log(`Item with id ${id} removed from cart!`);
    } else {
        console.log(`Item with id ${id} not found in cart.`);
    }
    renderbag();
    
  }

    function goToCheckout() {
    // Example: redirect to checkout.html
    window.location.href = "checkout.html";
  }

//    function removeItem() {
//     // Example logic: console log or actual item removal
//     console.log("Item removed!");
//     // jodi kono element remove korte hoy:
//     // document.getElementById("itemId").remove();
//   }
