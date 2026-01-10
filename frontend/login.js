// let auth0 = null; // global variable

// // Initialize Auth0 client inside async function
// async function initAuth0() {
//   auth0 = await createAuth0Client({
//     domain: "dev-sph0510dhtsmjzkz.us.auth0.com",
//     client_id: "jo2XIPWzMoCzE81p0JmiDP7nunfs25EY",
//     redirect_uri: window.location.origin + "/login.html"
//   });

//   // Handle redirect callback
//   const query = window.location.search;
//   if (query.includes("code=") && query.includes("state=")) {
//     await auth0.handleRedirectCallback();
//     window.history.replaceState({}, document.title, "/login.html");
//   }

//   // Update UI based on login state
//   const isAuthenticated = await auth0.isAuthenticated();
//   if (isAuthenticated) {
//     const user = await auth0.getUser();
//     console.log("User info:", user);
//     document.getElementById("login-btn").style.display = "none";
//     document.getElementById("logout-btn").style.display = "block";
//     document.getElementById("user-info").innerText = `Hello, ${user.name}`;
//   } else {
//     document.getElementById("login-btn").style.display = "block";
//     document.getElementById("logout-btn").style.display = "none";
//   }
// }

// // Run init on window load
// window.onload = initAuth0;

// // Login function (global)
// async function login() {
//   await auth0.loginWithRedirect({
//     connection: "google-oauth2"
//   });
// }

// // Logout function (global)
// function logout() {
//   auth0.logout({
//     returnTo: window.location.origin + "/login.html"
//   });
// }


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import {  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged} 
    from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

    
  // Your web app's Firebase configuration
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

  const googleBtn = document.getElementById("googleSignInBtn");
  const logoutBtn = document.getElementById("logoutBtn");
  const amazon = document.getElementById("buttoncontainer");
  
  /* ---------------- Login function ---------------- */
  function loginWithGoogle() {
    return signInWithPopup(auth, provider)
      .then((result) => {
         window.location.href = "checkout.html";
        window.username = result.user.displayName;
        console.log("Username set:", window.username);
        return window.username;
      })
      .catch(console.error);
  }
  
  /* ---------------- Button events ---------------- */
  googleBtn.addEventListener("click", () => {
    loginWithGoogle();
  });
  
  logoutBtn.addEventListener("click", () => {
    signOut(auth)
      .then(() => {
        window.username = null;
        alert("Logged out successfully");
      })
      .catch(console.error);
  });
  
  /* ---------------- Auth state listener (MOST IMPORTANT) ---------------- */
  onAuthStateChanged(auth, (user) => {
    if (user) {
      window.username = user.displayName;
  
      googleBtn.style.display = "none";
      logoutBtn.style.display = "block";
     
      amazon.classList.remove("min-h-screen");
  
      console.log("Auth state username:", window.username);
    } else {
      window.username = null;
  
      googleBtn.style.display = "block";
      logoutBtn.style.display = "none";
     
  }});
