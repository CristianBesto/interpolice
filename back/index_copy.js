// API REST : GET,POST,PUT,DELETE => express
// Importamos la libreria express
import express from "express";
import cors from "cors";
import { ciudadano } from "./modules/ciudadano.js";
import { usuario } from "./modules/usuario.js";

// Instanciamos la libreria en un objeto - app
const app = express();
const port = 3000;

// Middlewares
app.use(express.json()); // Serializa los request y response (para que se entienda JSON en el servidor)
app.use(cors());

// Primer recurso o endpoint
app.get("/", (req, res) => {
  res.status(200).send("API encendida");
});

// app.get("/ciudadano", (req, res) => {
//   res.status(200).send({
//     id: 1,
//     nombre: "Daniel",
//     apodo: "DanielRN-SOFT",
//     status: 1,
//     edad: 19,
//   });
// });

// Rutas
app.use("/", ciudadano);
app.use("/", usuario);



// Encendemos el servicio - prendemos la API
app.listen(port, () => {
  console.log(`Servidor corriendo en: ${port}`);
});
