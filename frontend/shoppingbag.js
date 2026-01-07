const shoppingDiv = document.getElementById("shopping");
const cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length === 0) {
  shoppingDiv.innerHTML = "<p>Cart empty</p>";
} else {

  // calculate total
  const total = cart.reduce((sum, item) => {
    return sum + Number(item.price);
  }, 0);

  shoppingDiv.innerHTML = `
    <div style="max-width:900px; margin:auto; display:flex; gap:40px;">

      <!-- LEFT: CART ITEMS -->
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

            <div style="font-weight:600;">
              ৳${item.price}
            </div>
          </div>
         
        `).join("")}
         <div class="  text-right">
             <p>Total: ${total}</p>
          </div>
      </div>

      <!-- RIGHT: TOTAL & CHECKOUT -->
      <div style="
        flex:1;
        border:1px solid #ddd;
        padding:20px;
        height:fit-content;
      ">
        <h3 style="margin-top:0;">Total</h3>

        <p style="
          font-size:20px;
          font-weight:700;
          margin:16px 0;
        ">
          ৳${total}
        </p>

        <button style="
          width:100%;
          padding:12px;
          background:black;
          color:white;
          border:none;
          font-size:16px;
          cursor:pointer;
        ">
          CHECKOUT
        </button>
      </div>

    </div>
  `;
}
