// Métodos más utilizados con cadenas de caracteres
// Como obtener la longitud de un string

let str = "Hola soy un string";

console.log(str.length);

// Obtener partes de cadenas de caracteres
// slice() substring substr()

let slice_str = str.slice(5, 10);
console.log(slice_str);

let substring_str = str.substring(5, 10);
console.log(substring_str);

let substr_str = str.substr(5, 10);
console.log(substr_str);

// Reemplazar parte del contenido de una cadena de texto

// Al utilizar strings solo reemplaza la primera instancia
let cadena = "Hola mi nombre es Gorka";
console.log(cadena.replace("Gorka", "Miguel"));

let texto_largo =
  "Tito no es un mono cualquier. A Tito no le gusta trepar por los áboles y odia comer plátanos. El prefiere pasear por le bosque, oler las flores y recoger las nueces que se caen de los árboles.";
console.log(texto_largo.replace("los", "cinco"));

// Al utilizar la expresión regular /g (global), reemplaza todas las instancias
console.log(texto_largo.replace(/los/g, "cinco"));
