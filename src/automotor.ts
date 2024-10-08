import { Propietario } from "./propietario.js";

// Clase general Automotor

export class Automotor {
  public patente: string;
  public marca: string;
  public modelo: number;
  public propietario: Propietario;

  constructor(
    patente: string,
    marca: string,
    modelo: number,
    propietario: Propietario
  ) {
    this.patente = patente;
    this.marca = marca;
    this.modelo = modelo;
    this.propietario = propietario;
  }

  getPatente(): string {
    return this.patente;
  }

  setPatente(nuevaPatente: string): void {
    this.patente = nuevaPatente;
  }

  getMarca(): string {
    return this.marca;
  }

  setMarca(nuevaMarca: string): void {
    this.marca = nuevaMarca;
  }

  getModelo(): number {
    return this.modelo;
  }

  setModelo(nuevoModelo: number): void {
    this.modelo = nuevoModelo;
  }

  mostrarInformacion(): void {
    console.log(
      `Patente: ${this.patente}, Marca: ${this.marca}, Modelo: ${
        this.modelo
      }, Titular: ${this.propietario.mostrarNombreCompleto()}`
    );
  }

  getTipo(): string {
    return "Automotor";
  }
}
