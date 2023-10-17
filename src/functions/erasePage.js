const content = document.querySelector(".content");

const cleanPage = () => {
	let contentChildren = content.childElementCount;

	for (let i = 0; i < contentChildren - 1; i++) {
		content.removeChild(content.lastElementChild);
	}
};

export default cleanPage;
