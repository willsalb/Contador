//console.log("teste");
//Exemplo de console.log
/* returnEvenValues(array){
    let evenNums = []
    for(let i = 0; i < array.length; i++){
        if(array [i] % 2 === 0) {
            evenNums.push(array[1]);
        }else{
            console.log(`${array[i]} não é par!`)
        }
    }
    console.log('Os números pares são:', evenNums);
}
let array = [1, 2, 3, 4, 5, 7, 8];
returnEvenValues(array);*/



//O elemento "span"
var currentNumberWrapper = document.getElementById("currentNumber")
//o número que vai mudar
var currentNumber = 0;

//Usando "addEvenListener" para clicar ao inves do incremente ou decremente
var element = document.getElementById("adicionar");
element.addEventListener("click", function() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
});

var element = document.getElementById("subtrair");
element.addEventListener("click", function() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
});



/*Quando clicar no botão no + vai chamar a função "increment"
Quando clicar no botão - vai chamar a função "decrement"
e sempre vai mudar o valor dentro da tag "span"
function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}*/