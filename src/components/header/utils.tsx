
function hoverUnderline() {
    document.querySelectorAll('.hover-underline').forEach(e => {
        e.addEventListener('mouseover', () => {
            e.classList.add('underline')
        })
        e.addEventListener('mouseout', () => {
            e.classList.remove('underline')
        })
    })
}


function menuHamburguer() {
    document.querySelectorAll('.hamburguer').forEach(e => {
        e.classList.toggle('active')
    })

    const navigation: HTMLElement | null = document.querySelector('.navigation')
    navigation?.classList.toggle('mobile')
}

export { hoverUnderline, menuHamburguer }