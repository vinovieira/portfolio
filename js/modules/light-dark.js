export default function initLightDark() {
	const botao = document.querySelector(".header__lightdark__botao");

	function handleClick() {
		const html = document.documentElement;
		const changeIconsList = document.querySelectorAll("[data-logo]");
		
		html.classList.toggle("light");

		changeIconsList.forEach((icon) => {
			if (!icon.hasAttribute("data-original-src")) {
				icon.setAttribute("data-original-src", icon.src);
			}

			if (html.classList.contains("light")) {
				icon.setAttribute("src", icon.getAttribute("data-dark-src"));
			} else {
				icon.setAttribute("src", icon.getAttribute("data-original-src"));
			}
		});
	}
	botao.addEventListener("click", handleClick);
}
