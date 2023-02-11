// Primera Forma

const libro = {
  titulo: "La ciudad y los perros",
  autor: "Mario Vargas Llosa",
  fecha: "1963",
  url: "https://es.wikipedia.org/wiki/La_ciudad_y_los_perros",
};

const lista = ["Anthony", 25, true, new Date("Aug 05 1997"), libro];
console.log(lista);

// Segunda Forma

const lista2 = [
  "Anthony",
  25,
  true,
  new Date("Aug 05 1997"),
  {
    titulo: "La ciudad y los perros",
    autor: "Mario Vargas Llosa",
    fecha: "1963",
    url: "https://es.wikipedia.org/wiki/La_ciudad_y_los_perros",
  },
];

console.log(lista2);
