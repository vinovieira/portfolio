export default function initAnimaScroll() {
    const sections = document.querySelectorAll('[data-anima="section"]')
    
    const windowMetade = window.innerHeight * 0.80
    
    function showSection() {

        sections.forEach((section) => {
            const distanciaTop = section.getBoundingClientRect().top
            const sectionVisible = (distanciaTop - windowMetade) < 0
            if (sectionVisible) {
                section.classList.add('active')
            } else if (section.classList.contains('active')) {
                section.classList.remove('active')
            }
    })
    }

    showSection()
    
    window.addEventListener('scroll', showSection)
}
