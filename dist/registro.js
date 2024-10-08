export class RegistroAutomotor {
    constructor() {
        this.registros = [];
    }
    agregarRegistro(automotor) {
        this.registros.push(automotor);
    }
    eliminarRegistro(patente) {
        this.registros = this.registros.filter((automotor) => automotor.patente !== patente);
    }
    listarRegistros() {
        this.registros.forEach((automotor) => automotor.mostrarInformacion());
    }
    // Mostrar datos en una tabla en el navegador
    mostrarDatos() {
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
                .map((registro) => `
            <tr>
              <td><strong>${registro.propietario.mostrarNombreCompleto()}</strong></td>
              <td>${registro.getTipo()}</td>
              <td>${registro.getPatente()}</td>
              <td>${registro.getMarca()}</td>
              <td>${registro.getModelo()}</td>
            </tr>`)
                .join("")}
        </tbody>
      `;
            container.appendChild(automotoresTable);
        }
    }
}
