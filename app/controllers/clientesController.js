// app/controllers/clientesController.js
const { clientes } = require("../models/clienteModel");

// Actualizar detalles de un cliente existente por su ID
function actualizarCliente(req, res) {
  const clienteId = req.params.id;
  const { nombre, email } = req.body;

  const clienteExistente = clientes.find((cliente) => cliente.id === clienteId);

  if (!clienteExistente) {
    return res.status(404).json({ message: "Cliente no encontrado" });
  }

  clienteExistente.nombre = nombre || clienteExistente.nombre;
  clienteExistente.email = email || clienteExistente.email;

  return res.json({ message: "Cliente actualizado exitosamente" });
}

module.exports = {
  actualizarCliente,
};
