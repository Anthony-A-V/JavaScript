// Cómo podemos comparar listas
// .every()
const array = [4, 6, 7, 8, 3, 6, 2, 1, -4, -7, 12, 5, -40];

// Forma 1
const resultado1 = array.every((valor) => {
  if (valor > 0) {
    return true;
  } else {
    return false;
  }
});
console.log(resultado1);

// Forma 2
const resultado2 = array.every((valor) => valor > 0);
console.log(resultado2);

const ar1 = [1, 2, 3, 4];
const ar2 = [1, 2, 3, 4];

console.log(ar1 === ar2);

// Forma 1
const compararArrays1 = (array_1, array_2) => {
  if (array_1.lenght !== array_2.lenght) return false;
  const res = array_1.every((valor, i) => {
    if (valor === array_2[i]) return true;
    return false;
  });
  return res;
};

console.log(compararArrays1(ar1, ar2));

// Forma 2
const compararArrays2 = (array_1, array_2) => {
  if (array_1.lenght !== array_2.lenght) return false;
  const res = array_1.every((valor, i) => valor === array_2[i]);
  return res;
};

console.log(compararArrays2(ar1, ar2));

const ar3 = [1, 2, 3, 9];

console.log(compararArrays2(ar1, ar3));
