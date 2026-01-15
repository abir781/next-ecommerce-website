import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// ================== Firebase config ==================
const firebaseConfig = {
  apiKey: "AIzaSyDa7En8VQLWAT9HR1jH7G1cFNqq1oVShZI",
  authDomain: "login-4f31c.firebaseapp.com",
  projectId: "login-4f31c",
  storageBucket: "login-4f31c.firebasestorage.app",
  messagingSenderId: "750241782700",
  appId: "1:750241782700:web:d7126f6df5aaa0d92a7809"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ================== DOM references ==================
const navbar = document.getElementById("navbar");

// dynamically create login button if it doesn't exist
let googleBtn = document.getElementById("googleSignInBtn");
if (!googleBtn) {
  googleBtn = document.createElement("button");
  googleBtn.id = "googleSignInBtn";
  googleBtn.textContent = "Login with Google";
  googleBtn.className = "btn bg-orange-900 text-white font-bold px-4 py-2 rounded";
  navbar.appendChild(googleBtn); // add to navbar dynamically
}

// ================== Login function ==================
function loginWithGoogle() {
  return signInWithPopup(auth, provider)
    .then((result) => {
      window.username = result.user.displayName;
      console.log("Username set:", window.username);
      window.location.href = "checkout.html"; // redirect after login
    })
    .catch(console.error);
}

// attach login click event
googleBtn.addEventListener("click", loginWithGoogle);

// ================== Auth state listener ==================
onAuthStateChanged(auth, (user) => {
  // check if logout button exists
  let logoutBtn = document.getElementById("logoutBtn");

  if (user) {
    // ------------------- Logged in -------------------
    window.username = user.displayName;

    // hide login button
    googleBtn.style.display = "none";

    // create logout button if not exist
    if (!logoutBtn) {
      logoutBtn = document.createElement("button");
      logoutBtn.id = "logoutBtn";
      logoutBtn.textContent = "Log out";
      logoutBtn.className = "btn btn-warning ml-4 px-4 py-2 rounded";

      logoutBtn.addEventListener("click", () => {
        signOut(auth)
          .then(() => {
            window.username = null;
            // after logout, you can redirect anywhere
            window.location.href = "login.html";
          })
          .catch(console.error);
      });

      navbar.appendChild(logoutBtn);
    }

    // show logout button
    logoutBtn.style.display = "block";

  } else {
    // ------------------- Logged out -------------------
    window.username = null;

    // show login button
    googleBtn.style.display = "block";

    // hide logout button if exists
    if (logoutBtn) logoutBtn.style.display = "none";
  }
});
