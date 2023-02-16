function devolverLista(num) {
  let lista = [];
  if (num == 0) {
    lista = [0];
  } else if (num == 1) {
    lista = [0, 1];
  } else {
    lista = [0, 1];
    for (let i = 2; i <= num; i++) {
      lista[i] = lista[i - 1] + lista[i - 2];
    }
  }
  return lista;
}

console.log(devolverLista(10));
