// export default function initLightDark() {
// 	const botao = document.querySelector(".header__lightdark__botao");

// 	document.addEventListener("DOMContentLoaded", () => {
// 		const currentTheme = localStorage.getItem("theme") || "light"; // Default: white
// 		html.classList.add(currentTheme);
// 	});

// 	function handleClick() {
// 		const html = document.documentElement;
// 		const changeIconsList = document.querySelectorAll("[data-logo]");
		
// 		html.classList.toggle("light");
// 		localStorage.setItem("theme", "light");
// 		changeIconsList.forEach((icon) => {
// 			if (!icon.hasAttribute("data-original-src")) {
// 				icon.setAttribute("data-original-src", icon.src);
// 			}

// 			if (html.classList.contains("light")) {
// 				icon.setAttribute("src", icon.getAttribute("data-dark-src"));
// 			} else {
// 				icon.setAttribute("src", icon.getAttribute("data-original-src"));
// 			}
// 		});
// 	}
// 	botao.addEventListener("click", handleClick);
// }
export default function initLightDark() {
    const botao = document.querySelector(".header__lightdark__botao");
    const html = document.documentElement;

    document.addEventListener("DOMContentLoaded", () => {
        const currentTheme = localStorage.getItem("theme") || "light"; 
        html.classList.add(currentTheme);

        const changeIconsList = document.querySelectorAll("[data-logo]");
        changeIconsList.forEach((icon) => {
            if (!icon.hasAttribute("data-original-src")) {
                icon.setAttribute("data-original-src", icon.src);
            }
            if (currentTheme === "light") {
                icon.setAttribute("src", icon.getAttribute("data-dark-src"));
            } else {
                icon.setAttribute("src", icon.getAttribute("data-original-src"));
            }
        });
    });

    function handleClick() {
        const changeIconsList = document.querySelectorAll("[data-logo]");

        if (html.classList.contains("light")) {
            html.classList.remove("light");
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            html.classList.remove("dark");
            html.classList.add("light");
            localStorage.setItem("theme", "light");
        }

        changeIconsList.forEach((icon) => {
            if (html.classList.contains("light")) {
                icon.setAttribute("src", icon.getAttribute("data-dark-src"));
            } else {
                icon.setAttribute("src", icon.getAttribute("data-original-src"));
            }
        });
    }

    botao.addEventListener("click", handleClick);
}
