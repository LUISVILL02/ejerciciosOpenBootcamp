
const fechaActual =  new Date();
const fechaNacimiento = new Date(2002, 9, 15);

const masTarde = fechaActual > fechaNacimiento;
let day = fechaNacimiento.getDate();
let month = fechaNacimiento.getMonth();
let año = fechaNacimiento.getFullYear();

console.log(day, " ", month, " ", año);