export default function initProjectsList() {
    addEventListener("DOMContentLoaded", () =>  {
        const projectContainer = document.querySelector('#project-container');

        const modal = document.getElementById('modal');
        const modalContent = document.getElementById('modal-content');
        const closeModal = document.getElementById('close-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalImage = document.getElementById('modal-image');
        const modalDetails = document.getElementById('modal-details');
        const modalTechnologies = document.getElementById('modal-technologies');
        const modalGithubLink = document.getElementById('modal-github-link');
        const modalOnlineLink = document.getElementById('modal-online-link');
    

        fetch('../../json/projects.json')
        .then(response => response.json())
        .then(data => data.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("projetos__projeto")
        card.innerHTML = `<h3 class="projeto__titulo">${item.title}</h3>
                    <img class="projeto__imagem" src="${item.image}" alt="">
                    <p class="projeto__descricao">${item.description}</p>
                    <ul class="projeto__tecnologias">
                        ${item.technologies.map(technology => 
                            `<li><p class="projeto__tecnologia">${technology}</p></li>`
                        ).join(' ')}
                    </ul>`

        projectContainer.appendChild(card)
    }))
    })

       
}
