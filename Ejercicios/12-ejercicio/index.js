function fibonacci(num) {
  let lista = [];
  if (num == 0) return (lista = [0]);
  if (num == 1) return (lista = [0, 1]);
  lista = [0, 1];
  for (let i = 2; i <= num; i++) {
    lista[i] = lista[i - 1] + lista[i - 2];
  }
  return lista;
}

console.log(fibonacci(6));
