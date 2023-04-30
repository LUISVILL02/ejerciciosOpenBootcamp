let nombre = "luis";
let apellido = "vill";

let estudiante = nombre + apellido;

let estudianteMayus = estudiante.toLowerCase();
let estudianteMinus = estudiante.toUpperCase();

let tamaño = estudiante.length;

let primeraLetraNombre = nombre.charAt(0);
let ultimaLetraApellido = apellido.charAt(3);

let sinEspacios = estudiante.trim();

let contenido = estudiante.includes(nombre);

console.log(estudiante, " \n", estudianteMayus, " ", estudianteMinus);
console.log(tamaño);
console.log(primeraLetraNombre, " ", ultimaLetraApellido);
console.log(contenido);

