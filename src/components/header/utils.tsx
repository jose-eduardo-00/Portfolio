
function hoverUnderline() {
    document.querySelectorAll('.hover-before').forEach(e => {
        e.addEventListener('mouseover', () => {
            e.classList.add('underline')
        })
        e.addEventListener('mouseout', () => {
            e.classList.remove('underline')
        })
    })
}

export { hoverUnderline }