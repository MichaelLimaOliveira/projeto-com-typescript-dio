console.log('Estou vinculado a pagina html')
let button = document.getElementById('button')
let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')

function sum(nun1, nun2)  {
    return nun1 + nun2;
}

button.addEventListener('click', () => {
    console.log(sum(parseInt(input1.value),parseInt(input2.value)));
});


