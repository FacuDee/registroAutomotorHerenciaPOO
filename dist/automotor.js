// Clase general Automotor
export class Automotor {
    constructor(patente, marca, modelo, propietario) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.propietario = propietario;
    }
    getPatente() {
        return this.patente;
    }
    setPatente(nuevaPatente) {
        this.patente = nuevaPatente;
    }
    getMarca() {
        return this.marca;
    }
    setMarca(nuevaMarca) {
        this.marca = nuevaMarca;
    }
    getModelo() {
        return this.modelo;
    }
    setModelo(nuevoModelo) {
        this.modelo = nuevoModelo;
    }
    mostrarInformacion() {
        console.log(`Patente: ${this.patente}, Marca: ${this.marca}, Modelo: ${this.modelo}, Titular: ${this.propietario.mostrarNombreCompleto()}`);
    }
    getTipo() {
        return "Automotor";
    }
}
