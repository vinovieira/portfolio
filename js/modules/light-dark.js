export default function initLightDark() {
	const botao = document.querySelector(".header__lightdark__botao");

	function handleClick() {
		const html = document.documentElement;
		html.classList.toggle("light");

		//Poderia adicionar data-dark="sourcedark" para mudar a src para o icone dark de cada elemento com mais facilidade
		const changeIconsList = document.querySelectorAll("[data-logo]");

		changeIconsList.forEach((icon) => {
			if (!icon.hasAttribute("data-original-src")) {
				icon.setAttribute("data-original-src", icon.src);
				}
				
			if (html.classList.contains("light")) {
				const newSrc = icon.getAttribute("data-dark-src")

				icon.setAttribute("src", newSrc);
			} else {
				const originalSrc = icon.getAttribute("data-original-src");
				
				if (originalSrc) {
					icon.setAttribute("src", originalSrc);
				}
			}
		});
	}
	botao.addEventListener("click", handleClick);
}
