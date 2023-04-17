const grid = document.querySelector('.grid')
const submit = document.getElementById('submit')

submit.addEventListener('click', () => squareadder())
for ( let i=0; i<11;i++){
    for (let j = 0; j<11; j++){
        let elem = document.createElement('div')
        elem.classList.add('square')
        grid.appendChild(elem)
    }
}

let square = document.querySelectorAll('.square')

for (const i of square){
    i.addEventListener('mouseover', () => {
        i.classList.add('squareVisited')
    });
}

function squareadder(){
    const x = document.forms['myform']['fname'].value;

    for (const i of square){
        i.remove()
    }

    for ( let i=0; i<x;i++){
        for (let j = 0; j<x; j++){
            let elem = document.createElement('div')
            elem.classList.add('square')
            grid.appendChild(elem)
        }
    }
    
    square = document.querySelectorAll('.square');



    for (const i of square){
        i.style.Width = `${352 / x}px`;
        i.style.Height = `${352 / x}px`;
        i.addEventListener('mouseover', () => {
            i.classList.add('squareVisited')
        });
    }

}