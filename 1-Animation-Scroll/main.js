const boxes = document.querySelectorAll('.box')
window.addEventListener('scroll', boxesCheck)
boxesCheck()

function boxesCheck() {
    const bottomTrigger = window.innerHeight / 5 * 4
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < bottomTrigger) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}