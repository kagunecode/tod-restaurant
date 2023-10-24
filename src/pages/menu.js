import lasagnaImg from "../assets/images/33362787.png";
import fetuccineImg from "../assets/images/Fettuccine.jpg";
import pizzaImg from "../assets/images/pizza.jpg";
import spaghettiImg from "../assets/images/SpaghettiB.jpg";

const menuLoad = () => {
	const content = document.querySelector(".content");

	const menuElement = document.createElement("div");
	menuElement.classList.add("menu-content");

	const menuCard = document.createElement("div");
	menuCard.classList.add("menu-card");

	const menuImage = document.createElement("img");
	menuImage.classList.add("menu-img");
	menuImage.src = lasagnaImg;
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

	menuElement.appendChild(menuCard.cloneNode(true));

	menuImage.src = fetuccineImg;
	menuImage.alt = "Fettuccine Alfredo";
	menuItemTitle.innerText = "Fettuccine Alfredo";
	menuItemDescription.innerText =
		"Fettuccine with creamy Alfredo sauce and cheese.";
	menuItemPrice.innerText = "$18";
	menuElement.appendChild(menuCard.cloneNode(true));

	menuImage.src = pizzaImg;
	menuImage.alt = "Premium Pizza";
	menuItemTitle.innerText = "Our Pizza";
	menuItemDescription.innerText =
		"Pizza cooked carefully with the ingredients of your choice.";
	menuItemPrice.innerText = "$20";
	menuElement.appendChild(menuCard.cloneNode(true));

	menuImage.src = spaghettiImg;
	menuImage.alt = "Napolitan Penne";
	menuItemTitle.innerText = "Napolitan Penne";
	menuItemDescription.innerText =
		"Penne pasta cooked in a fresh Napolitan sauce.";
	menuItemPrice.innerText = "$18";
	menuElement.appendChild(menuCard.cloneNode(true));

	content.appendChild(menuElement);
};

export default menuLoad;
