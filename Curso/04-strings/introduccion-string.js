// Sesión 4 - String (cadenas de caracteres)

let str_sng = "Hola soy un texto con comillas simples";
let str_dbl = "Hola soy un texto con comillas dobles";

console.log(str_dbl);
console.log(str_sng);

let str_comillas_dobles =
  'El otro día me dijo literalmente "ve a sacar la basura"';
let str_comillas_simples =
  'El otro día me dijo literalmente "ve a sacar la basura"';
let str_comillas_simples_2 =
  "El otro día me dijo literalmente 've a sacar la basura'";
let str_comillas_dobles_2 =
  "El otro día me dijo literalmente 've a sacar la basura'";

console.log(str_comillas_dobles);
console.log(str_comillas_simples);
console.log(str_comillas_simples_2);
console.log(str_comillas_dobles_2);

// Comillas invertidas (backticks)

let str_backticks = `Hola esto es un string con backticks`;

console.log(str_backticks);

let nombre = "Gorka";
let saludo = `Hola, ${nombre} bienvenido`;

console.log(saludo);

// Plantillas HTML

let plantilla = `
<html>
  <h1>Página web de ${nombre}</h1>
  <p>Esto es un párrafo</p>
</html>
`;

console.log(plantilla);

// Introducción de variables en HTML

let libros = [
  "Empieza con el porqué",
  "EL monje que vendió su Ferrari",
  "El poder del ahora",
];
