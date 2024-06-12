import initAnimaScroll from './anima-scroll.js'
export default function initPreload() {
	//selecionar os links com o dataset data-async 
	const links = document.querySelectorAll("[data-async]");

	//iterar sobre a pseudo lista dos links adicionando um uma função de callback ao clicar em cada um dos links
	links.forEach((link) => {
		link.addEventListener("click", handleClick);
	});

	//função de call back chamada ao clicar em um dos links selecionados
	function handleClick(event) {
		//prevenir comportamento padrao do clique no link (ex: abrir o href)
		event.preventDefault();
		//chamar a função fechPage com o argumento sendo o endereço do link clicado
		fetchPage(event.target.href);
		//adicionar a url do link na barra de busca
		window.history.pushState(null, null, event.target.href);
	}
	//função assincrona para carregar a pagina clicada recebe a url do link clicado conforme citado acima
	async function fetchPage(url) {
		// Faz o fetch da url e adiciona a resposta a uma variavel
		const pageResponse = await fetch(url);
		// Transforma a Promise de retorno em um texto
		const pageText = await pageResponse.text();
		//chamar a função contentLoad com o argumento do texto da pagina de destino
		contentLoad(pageText);
	}

	//função para trocar o conteudo exibido na pagina que recebe com parametro o texto da pagina de destino
	function contentLoad(newText) {
		//criar um elemento main no arquivo original
		const newContent = document.createElement("main");
		//adicionar o novo texto recebido da pagina no elemento main criado anteriormente
		newContent.innerHTML = newText;

		//Selecionar a section e o titulo da nova pagina
		const newMain = newContent.querySelector(".conteudo");
		const newTitle = newContent.querySelector("title");
		
		//Selecionar o conteudo da pagina
		const oldContent = document.querySelector(".conteudo");

		//Colocar o conteudo da pagina nova na atual
		document.title = newTitle.innerText;
		oldContent.innerHTML = newMain.innerHTML;
		//chamar a função anima scroll para o conteudo poder carregar na nova pagina
		initAnimaScroll();
		corrigirIcones();
	}

	window.addEventListener("popstate", () => {
		fetchPage(window.location.href);
	});

	function corrigirIcones() {
		const html = document.documentElement;
		const changeIconsList = document.querySelectorAll("[data-logo]");

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

}

