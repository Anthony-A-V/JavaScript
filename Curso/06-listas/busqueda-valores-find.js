// Iterar los valores de una lista
const array = ["hola", 2, 5, 90, false, undefined];

//Forma antigua (poco eficiente)
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// Forma ES6 más eficiente .forEarch()
let suma = 0;
const arrayNums = [3, 6, 2, 77, 2, 3, 93, 19];
arrayNums.forEach((valor) => {
  suma += valor;
  console.log(valor);
});
console.log(suma);

// Búsqueda de un valor dentro de una lista .find()
// Quiero encontrar el elemento 90
const variable = array.find((valor) => {
  if (valor === 90) {
    return true;
  }
});

console.log(variable);

const listaObjetos = [
  { nombre: "Leire", edad: 35 },
  { nombre: "Gorka", edad: 34 },
  { nombre: "Miguel", edad: 28 },
  { nombre: "Lucía", edad: 3 },
  { nombre: "Amaia", edad: 29 },
];

// Forma 1
const objeto1 = listaObjetos.find((o) => {
  if (o.nombre === "Miguel") {
    return true;
  }
});
console.log(objeto1.edad);

// Forma 2
const objeto2 = listaObjetos.find((o) => {
  return o.nombre === "Miguel";
});
console.log(objeto2.edad);

// Forma 3
const objeto3 = listaObjetos.find((o) => o.nombre === "Miguel");
console.log(objeto3.edad);

// Forma 4
const { edad } = listaObjetos.find((o) => o.nombre === "Amaia");
console.log(edad);