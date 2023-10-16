import navbarLoad from "../elements/navbar";
import loadHome from "../pages/home";

const firstLoad = () => {
	const content = document.querySelector(".content");
	const navbar = navbarLoad();
	content.appendChild(navbar);
	loadHome();
};

export default firstLoad;
