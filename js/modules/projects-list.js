export default function initProjectsList() {
  addEventListener('DOMContentLoaded', () => {
    const projectContainer = document.querySelector('#project-container');

    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalTechnologies = document.getElementById('modal-technologies');
    const modalGithubLink = document.getElementById('modal-github-link');
    const modalOnlineLink = document.getElementById('modal-online-link');
    const modalDetails = document.getElementById('modal-details');

    fetch('../../json/projects.json')
      .then((response) => response.json())
      .then((data) =>
        data.forEach((item) => {
          const card = document.createElement('div');
          card.classList.add('projetos__projeto');
          card.innerHTML = `<h3 class="projeto__titulo">${item.title}</h3>
                    <img class="projeto__imagem" src="${item.image}" alt="">
                    <p class="projeto__descricao">${item.description}</p>
                    <ul class="projeto__tecnologias">
                        ${item.technologies
                          .map(
                            (technology) =>
                              `<li><p class="projeto__tecnologia" title="${technology.name}">${technology.icon}</p></li>`,
                          )
                          .join(' ')}
                          <li><a class="rainbow-btn">Saiba mais</a></li>
                    </ul>`;

          card.addEventListener('click', () => {
            modalTitle.textContent = item.title;
            modalImage.setAttribute('src', item.image);
            modalDetails.innerHTML = '';
            if (item.sections) {
              item.sections.forEach((section) => {
                const subTitleElement = document.createElement('h3');
                subTitleElement.textContent = section.subtitulo;
                subTitleElement.classList.add('modal-subtitle');
                modalDetails.appendChild(subTitleElement);

                section.paragrafos.forEach((paragraph) => {
                  const pElement = document.createElement('p');
                  pElement.textContent = paragraph;
                  modalDetails.appendChild(pElement);
                });
              });
            }
            modalTechnologies.innerHTML = '';
            modalGithubLink.setAttribute('href', item.githubLink);
            if (item.onlineLink === '#' || !item.onlineLink) {
              modalOnlineLink.removeAttribute('href');
              modalOnlineLink.classList.add('disabled');
            } else {
              modalOnlineLink.setAttribute('href', item.onlineLink);
              modalOnlineLink.classList.remove('disabled');
            }
            modal.style.display = 'flex';
          });

          projectContainer.appendChild(card);
        }),
      );

    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
}
