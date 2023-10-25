import pizzaImg from "../assets/images/pizza.jpg";
import fettuccineImg from "../assets/images/Fettuccine.jpg";
import penneImg from "../assets/images/SpaghettiB.jpg";

const aboutLoad = () => {
	const content = document.querySelector(".content");

	const aboutContainer = document.createElement("div");
	aboutContainer.classList.add("about-container");

	const aboutTitleContainer = document.createElement("div");
	aboutTitleContainer.classList.add("about-title-container");

	const aboutTitle = document.createElement("div");
	aboutTitle.classList.add("about-title");
	aboutTitle.innerText = "A	B	O	U	T";
	aboutTitleContainer.appendChild(aboutTitle);

	const aboutText = document.createElement("div");
	aboutText.classList.add("about-text");
	aboutText.innerText =
		"Panquesitos is a brand of premium food created to deliver the best dining experience for the customers";

	const aboutImgContainer = document.createElement("div");
	aboutImgContainer.classList.add("about-img-container");
	const imageHolder = document.createElement("img");
	imageHolder.src = pizzaImg;
	imageHolder.classList.add("about-img");
	imageHolder.alt = "Delicious Baked Pizza";

	aboutImgContainer.appendChild(imageHolder.cloneNode(true));

	imageHolder.src = fettuccineImg;
	imageHolder.alt = "Fettuccine Alfredo";

	aboutImgContainer.appendChild(imageHolder.cloneNode(true));

	imageHolder.src = penneImg;
	imageHolder.alt = "Penne with home made Napolitan sauce";

	aboutImgContainer.appendChild(imageHolder.cloneNode(true));

	aboutContainer.appendChild(aboutTitleContainer);
	aboutContainer.appendChild(aboutText);
	aboutContainer.appendChild(aboutImgContainer);

	content.appendChild(aboutContainer);
};

export default aboutLoad;
