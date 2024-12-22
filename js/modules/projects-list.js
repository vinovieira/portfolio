export default function initProjectsList() {
    addEventListener("DOMContentLoaded", () =>  {
        const projectContainer = document.querySelector('#project-container');

        const modal = document.getElementById('modal');
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
        
        card.addEventListener('click', () => {
            modalTitle.textContent = item.title;
            modalImage.setAttribute('src', item.image);
            modalDetails.textContent = item.details;
            modalTechnologies.innerHTML = "";
            item.technologies.forEach(technologie => {
                const li = document.createElement("li");
                li.innerHTML = `<p class="projeto__tecnologia">${technologie}</p>`;
                modalTechnologies.appendChild(li);
            });
            modalGithubLink.setAttribute('href', item.githubLink);
            modalOnlineLink.setAttribute('href', item.onlineLink);
            modal.style.display = "flex";
        })            

        projectContainer.appendChild(card)
    }))

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
    })
}
