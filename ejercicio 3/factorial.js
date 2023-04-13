let numero = 10;

//factorial con ciclo for
let factorialFor = 1;
for (let i = numero; i >= 1; i--) {
    factorialFor = factorialFor*i;    
}
console.log(factorialFor);

//factorial bucle while
let factorialWh = 1;
while(numero > 0){
    factorialWh = factorialWh*numero; 
    numero--;
}
console.log(factorialWh);

//factorial bucle while con if
let factorial = 1;
let num = 10;
while(num > 0){
    if(num === 1 ){
        break;
    }
    factorial = factorial*num; 
    num--;
}
console.log(factorial);
