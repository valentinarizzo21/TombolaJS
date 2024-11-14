const tombola = document.getElementById('tombola');
const btnCreaElemento = document.getElementById('btnCreaElemento');

document.addEventListener('load', init());

const myArray = [];

function init (){
    gridTombola();
    click();
}

function gridTombola(){
    for(let i = 0; i < 90; i++){
        const numeriDiv = document.createElement('div');
    numeriDiv.innerText = i +1;
    tombola.appendChild(numeriDiv);
    }
}

/*function click(){
    btnCreaElemento.addEventListener('click', btnCreaElemento);
}

function btnCreaElemento(){
    let numeroRandom = Math.floor(Math.random()*90) + 1;
    const celle = document.querySelectorAll('#tombola div');

    if (myArray.includes(numeroRandom)){
        btnCreaElemento();
        return;
    }
    myArray.push(numeroRandom);

    for (let i = 0; celle.length; i++){
        celle[i].classList.add ('estratto');
    }
}

console.log(myArray);*/


