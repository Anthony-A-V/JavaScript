// Principales operaciones aritméticas
let a = 3.5;
let b = 4.8;

// Suma (+)
console.log(a + b);
// Resta (-)
console.log(a - b);
// Multiplicacion (*)
console.log(a * b);
// División (/)
console.log(a / b);

// Representación de los números en cadenas de texto
console.log(typeof a);
let a_s = a.toString();

console.log(a_s);
console.log(typeof a_s);

// Redondeo de números decimales
let c = 3.3;
let d = c * 3;

console.log(d);
// .toFixed() - Limita el número de decimales al valor x
console.log(d.toFixed(4));
console.log(typeof d.toFixed(4));

let e = 1839.1232456789;
let f = 2245646545456456;
console.log(e.toFixed(2));
console.log(f.toFixed(2));

//toPrecision() - Limita el número de cifras significativas
console.log(e.toPrecision(6));
console.log(f.toPrecision(10));

console.log(typeof f.toPrecision(7));
