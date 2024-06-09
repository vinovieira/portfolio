export default function initMenuMobile() {
    
}

const btnMenu = document.querySelector('[data-menu="button"]')
const listaMenu = document.querySelector('[data-menu="list"]')

function handleClick(event) {
    listaMenu.classList.toggle('active')
}

btnMenu.addEventListener('click', handleClick)