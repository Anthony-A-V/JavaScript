class Estudiante {
  nombre;
  asignaturas = ['JavasScript', 'HTML', 'CSS'];

  constructor(nombre) {
    this.nombre = nombre;
  }

  obtenDatos() {
    return { nombre: this.nombre, asignaturas: this.asignaturas };
  }
}

const estudiante = new Estudiante('Anthony');
console.log(estudiante.obtenDatos());
