import { RegistroAutomotor } from "./registro.js";
import { Propietario } from "./propietario.js";
import { Automovil } from "./automovil.js";
import { Motocicleta } from "./motocicleta.js";
import { Camion } from "./camion.js";

// Crear 15 propietarios
const propietario1 = new Propietario("Juan", "Pérez");
const propietario2 = new Propietario("Ana", "García");
const propietario3 = new Propietario("Carlos", "Martínez");
const propietario4 = new Propietario("Laura", "Fernández");
const propietario5 = new Propietario("Luis", "Rodríguez");
const propietario6 = new Propietario("María", "González");
const propietario7 = new Propietario("Diego", "López");
const propietario8 = new Propietario("Carolina", "Ramírez");
const propietario9 = new Propietario("Ricardo", "Sánchez");
const propietario10 = new Propietario("Daniel", "Suárez");
const propietario11 = new Propietario("Valeria", "Wilt");
const propietario12 = new Propietario("Martín", "Giménez");
const propietario13 = new Propietario("José", "Díaz");
const propietario14 = new Propietario("Maricel", "Sosa");
const propietario15 = new Propietario("Augusto", "Silvera");

// Crear 15 automotores y asignarles un propietario
const auto1 = new Automovil("AXZ650", "Toyota", 2022, propietario1);
const auto2 = new Automovil("HGT657", "Peugeot", 2019, propietario2);
const auto3 = new Automovil("GHU310", "Renault", 2005, propietario3);
const moto1 = new Motocicleta("XYZ987", "Yamaha", 2021, propietario4, 110);
const moto2 = new Motocicleta("TYU655", "Honda", 2023, propietario5, 150);
const moto3 = new Motocicleta("OPQ889", "Zanella", 2021, propietario6, 110);
const camion1 = new Camion("JKL456", "Volvo", 2020, propietario7);
const camion2 = new Camion("KOP909", "Nissan", 2022, propietario8);
const camion3 = new Camion("KLO887", "Iveco", 2016, propietario9);
const auto4 = new Automovil("ZXC789", "Ford", 2021, propietario10);
const auto5 = new Automovil("LOP456", "Ford", 2019, propietario11);
const auto6 = new Automovil("OIT554", "Peugeot", 2012, propietario12);
const moto4 = new Motocicleta("JIJ018", "Yamaha", 2013, propietario13, 250);
const camion4 = new Camion("RTE117", "Iveco", 2022, propietario14);
const camion5 = new Camion("UTA925", "Volvo", 2023, propietario15);

// Agregar todos los automotores al Registro Automotor
const registro = new RegistroAutomotor();

// Arreglo de automotores para poder recorrerlo
const automotores = [
  auto1,
  auto2,
  auto3,
  auto4,
  auto5,
  auto6,
  camion1,
  camion2,
  camion3,
  camion4,
  camion5,
  moto1,
  moto2,
  moto3,
  moto4,
];

// Agregar todos los automotores al registro utilizando forEach
automotores.forEach((automotor) => registro.agregarRegistro(automotor));

// Muestra los datos del registro en consola
console.log(registro);

// Mostrar los datos en el DOM
registro.mostrarDatos();
