// Controlador para ciudadano: encargado de escuchar y responder las peticiones

import { CiudadanoModel } from "../models/ciudadano.model.js";

export const getCiudadanos = async (req, res) => {
  // Codigo protegido con try catch
  try {
    const results = await CiudadanoModel.findALL();
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "Error al listar los ciudadanos",
    });
    console.log(error);
  }
};

// Buscar ciudadano por el parametro ID
export const getCiudadanoById = async (req, res) => {
  try {
    const results = await CiudadanoModel.findById(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "Error al buscar el ciudadano",
    });
  }
};

// Insertar un registro
export const createCiudadano = async (req, res) => {
  const data = {
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    apodo: req.body.apodo,
    fechaNace: req.body.fechaNace,
    planetaOrigin: req.body.planetaOrigin,
    planetaReside: req.body.planetaReside,
    foto: req.body.foto,
    codigoQr: req.body.codigoQr,
    estado: req.body.estado,
  };

  try {
    const results = await CiudadanoModel.create(data);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "Ocurrio un error en la insersión",
    });
  }
};

// Borrar ciudadano por el parametro ID
export const deleteCiudadano = async (req, res) => {
  try {
    const results = await CiudadanoModel.delete(req.params.id);
    console.log(results);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "Error al eliminar el ciudadano",
    });
  }
};

// Editar un registro
export const updateCiudadano = async (req, res) => {

  try {
    const results = await CiudadanoModel.update(req.params.id, req.body);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "Ocurrio un error al editar el ciudadano",
    });
  }
};
