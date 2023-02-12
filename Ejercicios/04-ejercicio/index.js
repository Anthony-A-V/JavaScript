let nombre = "Anthony";
let apellido = "Anguiz";
let estudiante = nombre.concat(" ", apellido);
console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let numeroLetrasEstudiante = estudiante.length;
console.log(numeroLetrasEstudiante);

let primeraLetraNombre = nombre.charAt(0);
console.log(primeraLetraNombre);

let ultimaLetraApellido = apellido.charAt(apellido.length - 1);
console.log(ultimaLetraApellido);

let estudianteSinEspacios = estudiante.replace(/\s+/g, "");
console.log(estudianteSinEspacios);

let estudianteContieneNombre = estudiante.includes(nombre);
console.log(estudianteContieneNombre);
