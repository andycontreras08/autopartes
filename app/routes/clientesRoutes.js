// app/routes/clientesRoutes.js
const express = require("express");
const router = express.Router();
const { actualizarCliente } = require("../controllers/clientesController");

// Ruta para actualizar los detalles de un cliente por su ID
router.put("/clientes/:id", actualizarCliente);

module.exports = router;
