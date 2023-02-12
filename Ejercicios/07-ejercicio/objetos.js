const datos = {
  nombre: "Anthony",
  apellido: "Anguiz",
  edad: 25,
  altura: 1.85,
  eresDesarrollador: true,
};

const edad = datos.edad;
console.log(edad);

const lista2 = [
  datos,
  {
    nombre: "Harry",
    apellido: "Potter",
    edad: 30,
    altura: 1.8,
    eresDesarrollador: false,
  },
  {
    nombre: "Petter",
    apellido: "Parker",
    edad: 45,
    altura: 1.75,
    eresDesarrollador: false,
  },
];
console.log(lista2);

const listaOrdenados = lista2.sort((a, b) => b.edad - a.edad);
console.log(listaOrdenados);
