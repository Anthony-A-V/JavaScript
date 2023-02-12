// Trabajar con métodos más avanzados
// .map() .filter() .reduce()

const array = ["San Sebastián", "Madrid", "Barcelona", "Alicante", "Bilbao"];

const val = array.forEach((v) => {
  console.log(v);
  return 4;
});
console.log(val);

// .map()

const newArray = array.map((valor, indice) => `${indice + 1} ${valor}`);
console.log(newArray);

const listaObjetos = [
  { nombre: "Leire", edad: 35 },
  { nombre: "Gorka", edad: 34 },
  { nombre: "Miguel", edad: 28 },
  { nombre: "Lucía", edad: 3 },
  { nombre: "Amaia", edad: 29 },
];

// .filter()

// Forma 1
const personasMayores1 = listaObjetos.filter((obj) => {
  if (obj.edad > 30) {
    return true;
  } else {
    return false;
  }
});
console.log(personasMayores1);

// Forma 2
const personasMayores2 = listaObjetos.filter((obj) => obj.edad > 30);
console.log(personasMayores2);

const nuevalista = listaObjetos.filter((obj) => obj.nombre !== "Miguel");
console.log(nuevalista);

// .reduce()

const valores = [3, 56, 23, 5, 90, 100];
const suma = valores.reduce((acumulado, cur, i, arrayOriginal) => {
  console.log(acumulado);
  console.log(cur);
  console.log(i);
  console.log(arrayOriginal);
  return acumulado + cur;
});
console.log(suma);
