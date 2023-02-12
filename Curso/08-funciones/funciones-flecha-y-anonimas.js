// Funciones tipo flecha - funciones anónimas

const array = [1, 5, 6, 2, 7, 12, 8, 92];

// Función tipo flecha y anónima
const array2 = array.map((valor) => valor * 2);

console.log(array2);

// const dobleDelValor = (valor) => {
//   return valor * 2;
// };

// Función tipo flecha
const dobleDelValor2 = (valor) => valor * 2;

console.log(doble(6));
console.log(dobleDelValor2(2));

const array3 = array.map(dobleDelValor2);
console.log(array3);

// Función normal
function doble(valor) {
  return valor * 2;
}
