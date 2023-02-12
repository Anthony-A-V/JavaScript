const fecha = new Date();
console.log(fecha);

const fechaNacimiento = new Date(1997, 07, 5);
console.log(fechaNacimiento);

const esMayor = fecha > fechaNacimiento;
console.log(esMayor);

const dia = fechaNacimiento.getDate();
console.log(dia);

const mes = fechaNacimiento.getMonth();
console.log(mes + 1);

const anyo = fechaNacimiento.getFullYear();
console.log(anyo);
