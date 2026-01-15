import { Homepage } from "./components/Homepage.js";
import { Navbar } from "./components/Navbar.js";
import "./login.js";  // inject login.js after Navbar DOM is available

// 1️⃣ Inject navbar first
document.getElementById("navbar").innerHTML = Navbar();

// 2️⃣ Inject homepage content
document.getElementById("home").innerHTML = Homepage();
