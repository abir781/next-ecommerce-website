import { Homepage } from "./components/Homepage.js";
import { Navbar } from "./components/Navbar.js";

document.getElementById("navbar").innerHTML = Navbar();

document.getElementById("home").innerHTML = Homepage();