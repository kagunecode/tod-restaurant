const navbarLoad = () => {
	const navbar = document.createElement("nav");
	const unlist = document.createElement("ul");
	const homeTab = document.createElement("li");
	const menuTab = document.createElement("li");
	const aboutTab = document.createElement("li");

	navbar.classList.add("nav-home");
	unlist.classList.add("navbar-list");
	let homeLink = document.createElement("a");
	homeLink.href = "#";
	homeLink.innerText = "Home";
	homeLink.id = "home";
	homeTab.appendChild(homeLink);

	let menuLink = document.createElement("a");
	menuLink.href = "#";
	menuLink.innerText = "Menu";
	menuLink.id = "menu";
	menuTab.appendChild(menuLink);

	let aboutLink = document.createElement("a");
	aboutLink.href = "#";
	aboutLink.innerText = "About";
	aboutLink.id = "about";
	aboutTab.appendChild(aboutLink);

	unlist.appendChild(homeTab);
	unlist.appendChild(menuTab);
	unlist.appendChild(aboutTab);

	navbar.appendChild(unlist);

	return navbar;
};

export default navbarLoad;
