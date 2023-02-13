function* generaId() {
  let id = 0;
  while (true) {
    id++;
    if (id === 10) {
      return id;
    }
    yield id; // Esperando hasta que se vuelva a llamar
  }
}

const gen = generaId();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// Ejemplo Mozilla

function* foo(index) {
  while (index < 2) {
    yield index;
    index++;
  }
}

const iterator = foo(0);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
