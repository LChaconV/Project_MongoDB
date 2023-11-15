// /*-------------------------EXPRESS-------------- */
// /* Conexión y configuración de express */
const express = require("express"); //importo el modulo de express
const cors = require("cors"); //importo el modulo de cors
const app = express(); // lo ejecutamos y guardamos en una variable (guardamos una INSTANCIA de express)
const port = 3000; // constante del puerto que levantare en el servidor
//conectamos a mongo---
//require("./db.js"); /* ESTA LINEA ME CONECTA CON MONGO DB */

// /* ------MIDDLEWARES (configuraciones express)---------------------------------------------------------- */
app.use(express.json()); /*--Para aceptar json(body) en mis peticiones http-- */
app.use(cors()); /* Para aceptar peticiones del front o postman*/

/* -------------------------- */
// /* Vinculo mis modelos para usar rutas */

const gatitos = require("./Models/Gatitos")
const User = require("./Models/Users")






// /* RUTAS */

app.get("/", (req, res) => {
  res.send(
    "Hello World!, Ruta inicial de ejemplo, Bienvenido a la api de marketplace de protalento y mongoose"
  );
});

app.post("/gatito", (req, res) => {
  const name= req.query.name
  const ingresarGatito= Gatito.create({name:name})
  res.json(
    "Registro correcto"
  );
});

app.post("/user", (req, res) => {
  const name= req.body
  const ingresarusuario= User.create({name:body.name})
  res.json(
    "Registro correcto"
  );
});
 
/* -------------------------------- */
module.exports = { app, port };