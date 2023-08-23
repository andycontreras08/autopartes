// app/models/clienteModel.js
const clientes = []; // Simulación de base de datos

class Cliente {
  constructor(id, nombre, email) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
  }
}

module.exports = {
  Cliente,
  clientes,
};
