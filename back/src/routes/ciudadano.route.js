// Las rutas del modulo ciudadano
import { Router } from "express";
// Importamos la logica del controlador para construir cada interaccion de la ruta:                  get, post, put, delete
import * as CiudadanoController from "../controllers/ciudadano.controller.js";

// Instanciamos el metodo router de express para poder crear las rutas
const router = Router();

// Las rutas del modulo
// Ruta para listar todos
router.get("/ciudadano/listartodos", CiudadanoController.getCiudadanos);
router.get("/ciudadano/listarporid/:id", CiudadanoController.getCiudadanoById);
router.post("/ciudadano/crear", CiudadanoController.createCiudadano);
router.delete("/ciudadano/borrar/:id", CiudadanoController.deleteCiudadano);
router.put("/ciudadano/editar/:id", CiudadanoController.updateCiudadano);

export default router;
