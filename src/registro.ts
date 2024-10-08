import { Automotor } from "./automotor.js";

export class RegistroAutomotor {
  private registros: Automotor[];

  constructor() {
    this.registros = [];
  }

  agregarRegistro(automotor: Automotor): void {
    this.registros.push(automotor);
  }

  eliminarRegistro(patente: string): void {
    this.registros = this.registros.filter(
      (automotor) => automotor.patente !== patente
    );
  }

  listarRegistros(): void {
    this.registros.forEach((automotor) => automotor.mostrarInformacion());
  }

  // Mostrar datos en una tabla en el navegador
  mostrarDatos(): void {
    const container = document.querySelector(".container");
    if (container) {
      // Tabla de automotores
      const automotoresTable = document.createElement("table");
      automotoresTable.innerHTML = `
        <thead>
          <tr>
            <th>Titular</th>
            <th>Tipo</th>
            <th>Patente</th>
            <th>Marca</th>
            <th>Modelo</th>
          </tr>
        </thead>
        <tbody>
          ${this.registros
            .map(
              (registro) => `
            <tr>
              <td><strong>${registro.propietario.mostrarNombreCompleto()}</strong></td>
              <td>${registro.getTipo()}</td>
              <td>${registro.getPatente()}</td>
              <td>${registro.getMarca()}</td>
              <td>${registro.getModelo()}</td>
            </tr>`
            )
            .join("")}
        </tbody>
      `;
      container.appendChild(automotoresTable);
    }
  }
}
