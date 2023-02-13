const logger = require("./logger");

function esPar(numero) {
  if (numero % 2 == 0) {
    logger.log("Es verdadero");
    return;
  }
  throw new Error("El número no es par");
}

try {
  esPar(7);
  logger.log("El valor es verdadero");
} catch (e) {
  logger.error(`Error!`);
  logger.error(`El valor de e es: ${e}`);
}
