
const X_CLASS = 'x';
const CIRCLE_CIRCLE = 'circle';
const cellElements = document.querySelectorAll('[data-cell')
let circleTurn

cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, {once:true})
})

