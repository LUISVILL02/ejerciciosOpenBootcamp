
let alturaEnCentimetros  = 175;
let alturaEnMetros = 1.75;
let pesoEnKg = 54.0;

let alturaRedondeada = Math.ceil(alturaEnMetros);
let pesoRedondeado = Math.floor(pesoEnKg);

let maxValorMas1 = Number.MAX_VALUE +1;
let sonInguales = maxValorMas1 === Number.MAX_VALUE;

console.log(" Altura cm: ",alturaEnCentimetros, "\nAltura m: ", alturaEnMetros, "\nPeso kg: ", pesoEnKg, "\n Altura redondeada hacia arriba: ", alturaRedondeada, "\nPeso redondeado hacia arriba: ", pesoRedondeado, "\n Max valor +1 igual a max valor?: ", sonInguales);