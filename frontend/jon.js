import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } 
  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 🔹 Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDa7En8VQLWAT9HR1jH7G1cFNqq1oVShZI",
  authDomain: "login-4f31c.firebaseapp.com",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔹 DOM elements
const shoppingDiv = document.getElementById("shopping");
const logoutBtn = document.getElementById("logoutBtn"); // make sure this exists in HTML

// 🔐 PRIVATE ROUTE CHECK
onAuthStateChanged(auth, (user) => {
  if (!user) {
    // ❌ Not logged in
    window.location.href = "login.html";
  } else {
    // ✅ Logged in
    console.log("Welcome:", user.displayName);
  }
});

// 🔹 LOGOUT
logoutBtn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      window.username = null;
      alert("Logged out successfully");
      window.location.href = "index.html";
    })
    .catch(console.error);
});

// 🔹 Render shopping cart
function rendercheck() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

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
        `).join('')}
      </div>
    </div>
  `;
}
rendercheck();