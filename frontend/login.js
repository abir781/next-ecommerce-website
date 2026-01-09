let auth0 = null; // global variable

// Initialize Auth0 client inside async function
async function initAuth0() {
  auth0 = await createAuth0Client({
    domain: "dev-sph0510dhtsmjzkz.us.auth0.com",
    client_id: "jo2XIPWzMoCzE81p0JmiDP7nunfs25EY",
    redirect_uri: window.location.origin + "/login.html"
  });

  // Handle redirect callback
  const query = window.location.search;
  if (query.includes("code=") && query.includes("state=")) {
    await auth0.handleRedirectCallback();
    window.history.replaceState({}, document.title, "/login.html");
  }

  // Update UI based on login state
  const isAuthenticated = await auth0.isAuthenticated();
  if (isAuthenticated) {
    const user = await auth0.getUser();
    console.log("User info:", user);
    document.getElementById("login-btn").style.display = "none";
    document.getElementById("logout-btn").style.display = "block";
    document.getElementById("user-info").innerText = `Hello, ${user.name}`;
  } else {
    document.getElementById("login-btn").style.display = "block";
    document.getElementById("logout-btn").style.display = "none";
  }
}

// Run init on window load
window.onload = initAuth0;

// Login function (global)
async function login() {
  await auth0.loginWithRedirect({
    connection: "google-oauth2"
  });
}

// Logout function (global)
function logout() {
  auth0.logout({
    returnTo: window.location.origin + "/login.html"
  });
}
