export class Propietario {
  public nombre: string;
  public apellido: string;

  constructor(nombre: string, apellido: string) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  mostrarNombreCompleto(): string {
    return `${this.nombre} ${this.apellido}`;
  }
}
