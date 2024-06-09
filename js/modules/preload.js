import initAnimaScroll from './anima-scroll.js'
export default function initPreload() {
	const links = document.querySelectorAll("[data-async]");

	links.forEach((link) => {
		link.addEventListener("click", handleClick);
	});

	function handleClick(event) {
		event.preventDefault();
		fetchPage(event.target.href);
		window.history.pushState(null, null, event.target.href);
	}

	async function fetchPage(url) {
		const pageResponse = await fetch(url);
		const pageText = await pageResponse.text();

		contentLoad(pageText);
	}

	function contentLoad(newText) {
		const newContent = document.createElement("main");
		newContent.innerHTML = newText;

		const newMain = newContent.querySelector(".conteudo");
		const newTitle = newContent.querySelector("title");

		const oldContent = document.querySelector(".conteudo");

		document.title = newTitle.innerText;
		oldContent.innerHTML = newMain.innerHTML;
		initAnimaScroll();
	}

	window.addEventListener("popstate", () => {
		fetchPage(window.location.href);
	});
}

