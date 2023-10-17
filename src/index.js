import firstLoad from "./functions/firstLoad";
import "./styles/style.css";
import cleanPage from "./functions/erasePage";
import navbarLoad from "./elements/navbar";

firstLoad();

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");
const content = document.querySelector(".content");

menuButton.addEventListener("click", () => {
	cleanPage();
	const navbar = document.querySelector("nav");
	navbar.classList.remove("nav-home");
	navbar.classList.add("nav-secondary");
});
