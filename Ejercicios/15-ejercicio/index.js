const nombre = "Anthony";
const apellido = "Anguiz";
const datos = {
  nombre,
  apellido
};

sessionStorage.setItem("datos-sesion", JSON.stringify(datos));
localStorage.setItem("datos-sesion", JSON.stringify(datos));

document.cookie =
  "objetoCookie=" +
  JSON.stringify(datos) +
  "; expires=" +
  new Date(2023, 1, 17, 21, 5, 0, 100).toUTCString();
