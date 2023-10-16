const navbarLoad = () => {
	const navbar = document.createElement("nav");
	const unlist = document.createElement("ul");
	const homeTab = document.createElement("li");
	const menuTab = document.createElement("li");
	const aboutTab = document.createElement("li");

	unlist.classList.add("navbar-list");
	let homeLink = document.createElement("a");
	homeLink.href = "#";
	homeLink.innerText = "Home";
	homeTab.appendChild(homeLink);

	let menuLink = document.createElement("a");
	menuLink.href = "#";
	menuLink.innerText = "Menu";
	menuTab.appendChild(menuLink);

	let aboutLink = document.createElement("a");
	aboutLink.href = "#";
	aboutLink.innerText = "About";
	aboutTab.appendChild(aboutLink);

	unlist.appendChild(homeTab);
	unlist.appendChild(menuTab);
	unlist.appendChild(aboutTab);

	navbar.appendChild(unlist);

	return navbar;
};

export default navbarLoad;
