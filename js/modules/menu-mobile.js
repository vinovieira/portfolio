import outsideClick from './outside-click.js'
export default function initMenuMobile() {
    
    const btnMenu = document.querySelector('[data-menu="button"]');
    const listaMenu = document.querySelector('[data-menu="list"]');
    const eventos = ["click", "touchstart"];
    
    if (btnMenu) {
        function openMenu(event) {
            listaMenu.classList.add("active");
            btnMenu.classList.add("active");
            outsideClick(listaMenu, eventos, () => {
                listaMenu.classList.remove("active");
                btnMenu.classList.remove("active");
            });
        }
    
        eventos.forEach((evento) => {
            btnMenu.addEventListener(evento, openMenu);
        });
    }}


