
const personalInformation = {nombre: "LUISVILL", apellido: "lv", edad: 20, altura: 1.75, eresDesarrollador: true};

let edad = "edad";

const datas = [personalInformation, {nombre: "deriva", apellido: "der", edad: 21, altura: 1.80, eresDesarrollador: false}];

const sortDates = [...datas.sort((a, b) => b.edad - a.edad)];

console.log(sortDates);
console.log(datas);