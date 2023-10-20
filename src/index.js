import firstLoad from "./functions/firstLoad";
import "./styles/style.css";
import cleanPage from "./functions/erasePage";
import navbarLoad from "./elements/navbar";
import menuLoad from "./pages/menu";

const content = document.querySelector(".content");

content.appendChild(navbarLoad());
firstLoad();

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

homeButton.addEventListener("click", () => {
	cleanPage();
	const navbar = document.querySelector("nav");
	navbar.classList.remove("nav-secondary");
	navbar.classList.add("nav-home");
	firstLoad();
});

menuButton.addEventListener("click", () => {
	cleanPage();
	const navbar = document.querySelector("nav");
	navbar.classList.remove("nav-home");
	navbar.classList.add("nav-secondary");
	menuLoad();
});

aboutButton.addEventListener("click", () => {
	cleanPage();
	const navbar = document.querySelector("nav");
	navbar.classList.remove("nav-home");
	navbar.classList.add("nav-secondary");
});
