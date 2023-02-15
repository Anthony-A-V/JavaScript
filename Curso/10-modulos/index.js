// Formas de importar y exportar módulos
// 1.- CommonJS - require
// 2.- Import ES6 - import

// const moduleMatematicas = require('./modulos/matematicas.js');
// const factorial = moduleMatematicas.factorial;
// const { factorial, suma } = moduleMatematicas;
// const suma = moduleMatematicas.suma;
// console.log(moduleMatematicas);

const { factorial, suma } = require('./modulos/matematicas.js');

const fact = factorial(5);
console.log(fact);

const sum = suma(12, 90);
console.log(sum);

// console.log(module);
