export class Propietario {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    mostrarNombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }
}
