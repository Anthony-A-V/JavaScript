// Trabajando con Objetos
const obj = {
  id: 4,
  nombre: "Juan",
  apellido: "Gonzales",
  isDeveloper: true,
  libros_favoritos: ["El método", "El código de la manifestación"],
  "4-juegos": [1, 2, 3, 4],
};
console.log(obj.id);
console.log(obj["4-juegos"]);

const prop = "isDeveloper";
console.log(obj[prop]);

// El objeto se referencia y se igualan ambos objetos (El valor del objeto original también cambia)

const obj2 = obj;
console.log(obj2);

obj2.nombre = "Iñigo";
console.log(obj.nombre);
console.log(obj);

let val1 = 4;
let val2 = val1;

val2 = 6;
console.log(val1);
console.log(val2);

// El objeto se copia usando el factor de propagación (El valor del objeto original no cambia)

const obj3 = { ...obj };
console.log(obj.nombre);
console.log(obj3.nombre);

obj3.nombre = "Gorka";

console.log(obj.nombre);
console.log(obj3.nombre);

// Cómo ordernar listas de objetos en función de una propiedad

const listaPeliculas = [
  { titulo: "Lo que el viendo se llevo", anyo: 1939 },
  { titulo: "Titanic", anyo: 1997 },
  { titulo: "Moana", anyo: 2016 },
  { titulo: "El efecto mariposa", anyo: 2004 },
  { titulo: "TED", anyo: 2012 },
];

console.log(listaPeliculas);
// .sort() -> Muta el valor de la lista original

// Ordenando con números
listaPeliculas.sort((a, b) => a.anyo - b.anyo);
console.log(listaPeliculas);

// Ordenando con textos
// Forma 1 Imperativa
listaPeliculas.sort((a, b) => {
  if (a.titulo > b.titulo) {
    return 1;
  }
  if (a.titulo < b.titulo) {
    return -1;
  }
  return 0;
});
console.log(listaPeliculas);

// Forma 2 con Operador Ternario Concatenado
listaPeliculas.sort((a, b) =>
  a.titulo > b.titulo ? 1 : a.titulo < b.titulo ? -1 : 0
);
console.log(listaPeliculas);

// Forma 3 con charCodeAt(0)
listaPeliculas.sort((a, b) => a.titulo.charCodeAt(0) - b.titulo.charCodeAt(0));
console.log(listaPeliculas);

// Forma 4 ES6 con localeCompare()
listaPeliculas.sort((a, b) => a.titulo.localeCompare(b.titulo));
console.log(listaPeliculas);
