const nombre = "Anthony";
const apellido = "Anguiz";
const datos = {
  nombre: nombre,
  apellido: apellido
};

sessionStorage.setItem("datos-sesion", JSON.stringify(datos));
localStorage.setItem("datos-sesion", JSON.stringify(datos));

document.cookie = "objetoCookie=" + JSON.stringify(datos);
+"; expires=" + new Date(2023, 0, 1, 2, 52, 59, 100).toUTCString();
