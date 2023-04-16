const grid = document.querySelector('.grid')

for ( let i=0; i<16;i++){
    for (let j = 0; j<16; j++){
        let elem = document.createElement('div')
        elem.classList.add('square')
        grid.appendChild(elem)
    }
}