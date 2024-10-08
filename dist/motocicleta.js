import { Automotor } from "./automotor.js";
// Clase heredada de Automotor
export class Motocicleta extends Automotor {
    constructor(patente, marca, modelo, propietario, cilindrada) {
        super(patente, marca, modelo, propietario);
        this.cilindrada = cilindrada;
    }
    getCilindrada() {
        return this.cilindrada;
    }
    setCilindrada(nuevaCilindrada) {
        this.cilindrada = nuevaCilindrada;
    }
    getTipo() {
        return "Motocicleta";
    }
}
