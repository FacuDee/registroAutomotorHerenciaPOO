import { Automotor } from "./automotor.js";
import { Propietario } from "./propietario.js";

// Clase heredada de Automotor

export class Camion extends Automotor {
  constructor(
    patente: string,
    marca: string,
    modelo: number,
    propietario: Propietario
  ) {
    super(patente, marca, modelo, propietario);
  }

  getTipo(): string {
    return "Camión";
  }
}
