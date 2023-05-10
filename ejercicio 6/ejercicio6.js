
const buys = ["eggs", "milk", "sugar", "rice", "salad"];

buys.splice(0,0,"aceite de girasol");

buys.splice(0,1);

const favoriteMovies = [{title: "back to the future", director: "Robert Zemeckis", date: 1985},
{title: "interestellar", director: "Christopher Nolan", date: 2014},
{title: "avengers endgame", director: "Anthony Russo", date: 2019}];

const moviesPost2010 = favoriteMovies.filter(value => value.date > 2009);
console.log(moviesPost2010);

const titles = favoriteMovies.map(value => value.title)
const directores = favoriteMovies.map(value => value.director);
console.log(directores);
console.log(titles);

const titlesAndDirectoresConcat = directores.concat(titles);
console.log(titlesAndDirectoresConcat);

const titlesAndDirectoresPropagacion = [...directores, ...titles];

console.log(titlesAndDirectoresPropagacion)

