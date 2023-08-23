// app/app.js
const express = require("express");
const app = express();
const clientesRoutes = require("./routes/clientesRoutes");

app.use(express.json());

app.use("/api", clientesRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
