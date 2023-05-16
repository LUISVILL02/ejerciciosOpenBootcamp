

function fibonacci(num){
    let serie = [];
    let fibonacci0 = 0;
    let fibonacci1 = 1;
    serie.push(fibonacci0, fibonacci1);
    for(i = 2; i <= num; i++){
        let fibonacci = fibonacci0 + fibonacci1;
        fibonacci0 = fibonacci1;
        fibonacci1 = fibonacci;
        serie.push(fibonacci);
    }
    return serie;
    
}

let serie = fibonacci(5);
console.log(serie);