import dishImage from "../assets/images/33362787.png";

const menuLoad = () => {
	const content = document.querySelector(".content");

	const menuElement = document.createElement("div");
	menuElement.classList.add("menu-content");

	const menuCard = document.createElement("div");
	menuCard.classList.add("menu-card");

	const menuImage = document.createElement("img");
	menuImage.classList.add("menu-img");
	menuImage.src = dishImage;
	menuImage.alt = "Lasagana Bolognese";

	const menuItemText = document.createElement("div");
	menuItemText.classList.add("menu-item-text");

	const menuItemTitle = document.createElement("h1");
	menuItemTitle.classList.add("menu-item-title");
	menuItemTitle.innerText = "Lasagna Bolognese";

	const menuItemDescription = document.createElement("p");
	menuItemDescription.classList.add("menu-item-description");
	menuItemDescription.innerText = "Italian lasagna with bolognese sauce.";

	const menuItemPrice = document.createElement("p");
	menuItemPrice.classList.add("menu-item-price");
	menuItemPrice.innerText = "$12";

	menuItemText.appendChild(menuItemTitle);
	menuItemText.appendChild(menuItemDescription);
	menuItemText.appendChild(menuItemPrice);

	menuCard.appendChild(menuImage);
	menuCard.appendChild(menuItemText);

	for (let i = 0; i < 4; i++) {
		menuElement.appendChild(menuCard.cloneNode(true));
	}

	content.appendChild(menuElement);
};

export default menuLoad;
