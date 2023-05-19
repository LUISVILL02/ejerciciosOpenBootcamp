let nombre = "Luisvill";
let apellido = "lv";
let user = document.querySelector(".name");
const data = {
    name: nombre,
    lastname: apellido
}
// console.log(user.innerText);
// sessionStorage.setItem("datas", JSON.stringify(data));
// localStorage.setItem("datas", JSON.stringify(data));
// document.cookie = `dates =${JSON.stringify(data)};expires=`+ new Date(2023, 4, 19, 13, 38).toUTCString;

user.innerText = JSON.parse(localStorage.getItem("datas")).name;
console.log(user);