const grid = document.querySelector('.grid')
const submit = document.getElementById('submit')

submit.addEventListener('click', () => squareadder())
for ( let i=0; i<16;i++){
    let row = document.createElement('div')
    row.classList.add('row')
    grid.appendChild(row)
    for (let j = 0; j<16; j++){
         let elem = document.createElement('div')
         elem.classList.add('square')
         row.appendChild(elem)
    }
}

let square = document.querySelectorAll('.square')
let row = document.querySelectorAll('.row')

for (const i of square){
    i.addEventListener('mouseover', () => {
        i.classList.add('squareVisited')
    });
}

function squareadder(){
    const x = document.forms['myform']['fname'].value;

    if (x > 100){
        alert("Value should be smaller than 100")
    }
    else{
    for (const i of row){
        i.remove()
    }

    for ( let i=0; i<x;i++){
        let row = document.createElement('div')
        row.classList.add('row')
        grid.appendChild(row)
        for (let j = 0; j<x; j++){
            let elem = document.createElement('div')
            elem.classList.add('square')
            row.appendChild(elem)
        }
    }
    
    square = document.querySelectorAll('.square');



    for (const i of square){
        i.addEventListener('mouseover', () => {
            i.classList.add('squareVisited')
        });
    }
    
    row = document.querySelectorAll('.row')
    }
}