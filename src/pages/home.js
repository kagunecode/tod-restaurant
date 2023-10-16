import backgroundVideo from "../assets/video/262003.mp4";

const loadHome = () => {
	const content = document.querySelector(".content");

	const hero = document.createElement("section");
	hero.classList.add("hero");

	const video = document.createElement("video");
	video.classList.add("imgsrc");
	video.src = backgroundVideo;
	video.autoplay = true;
	video.loop = true;
	video.muted = true;
	video.load();

	const heroText = document.createElement("div");
	heroText.classList.add("hero-text");
	const mainText = document.createElement("div");
	mainText.classList.add("main-text");
	mainText.innerText = "PANQUESITO";
	const descText = document.createElement("div");
	descText.classList.add("desc-text");
	descText.innerText = "fine dining by kagune";

	heroText.appendChild(mainText);
	heroText.appendChild(descText);

	hero.appendChild(video);
	hero.appendChild(heroText);

	content.appendChild(hero);
};

export default loadHome;
