import { Automotor } from "./automotor.js";
import { Propietario } from "./propietario.js";

// Clase heredada de Automotor

export class Motocicleta extends Automotor {
  cilindrada: number;
  constructor(
    patente: string,
    marca: string,
    modelo: number,
    propietario: Propietario,
    cilindrada: number
  ) {
    super(patente, marca, modelo, propietario);
    this.cilindrada = cilindrada;
  }

  getCilindrada(): number {
    return this.cilindrada;
  }

  setCilindrada(nuevaCilindrada: number): void {
    this.cilindrada = nuevaCilindrada;
  }

  getTipo(): string {
    return "Motocicleta";
  }
}
