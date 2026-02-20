// API REST : GET,POST,PUT,DELETE => express
// Importamos la libreria express
import express from "express";
import cors from "cors";
import CiudadanoRutas from './routes/ciudadano.route.js'

// Instanciamos la libreria en un objeto - app
const app = express();

// Middlewares
app.use(express.json()); // Serializa los request y response (para que se entienda JSON en el servidor)
app.use(cors());

// Rutas
app.use("/api", CiudadanoRutas);

export default app;
