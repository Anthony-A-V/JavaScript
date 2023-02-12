const listCompra = ["Arroz", "Tomate", "Cebolla", "Zanahoria", "Papa"];
listCompra.push("Aceite de Girasol");
console.log(listCompra);

listCompra.pop();
console.log(listCompra);

const listPeliculas = [
  {
    titulo: "El Exorcista",
    director: "William Friedkin",
    fecha: new Date(2001, 2, 15),
  },
  {
    titulo: "Buscando a Nemo",
    director: "Andrew Stanton",
    fecha: new Date(2003, 6, 3),
  },
  {
    titulo: "John Wick",
    director: "Chad Stahelski",
    fecha: new Date(2014, 11, 25),
  },
];

const listPosteriores = listPeliculas.filter(
  (pelicula) => pelicula.fecha > new Date(2010, 0, 1)
);
console.log(listPosteriores);

const listDirectores = listPeliculas.map((pelicula) => pelicula.director);
console.log(listDirectores);

const listTitulos = listPeliculas.map((pelicula) => pelicula.titulo);
console.log(listTitulos);

const listConcat = listDirectores.concat(listTitulos);
console.log(listConcat);

const listConcatPropagacion = [...listDirectores, ...listTitulos];
console.log(listConcatPropagacion);
