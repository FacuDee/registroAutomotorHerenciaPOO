import { Automotor } from "./automotor.js";
// Clase heredada de Automotor
export class Camion extends Automotor {
    constructor(patente, marca, modelo, propietario) {
        super(patente, marca, modelo, propietario);
    }
    getTipo() {
        return "Camión";
    }
}
