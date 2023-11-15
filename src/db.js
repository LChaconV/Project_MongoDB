const mongoose = require("mongoose"); /* importo el módulo de mongoose */

async function connection() {
  await mongoose
    .connect(
      "mongodb+srv://laura080275:1234@loginbackend.eem1qaa.mongodb.net/?retryWrites=true&w=majority" // ir a Mongo, abrir el proyecto y conectar, en el segundo paso nos arroja una url copiar y cambiar <password>
    )
    .then(console.log("Base de datos Mongo conectada"))
    .catch((err) => console.log(err));
}

module.exports = { connection };
