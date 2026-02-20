// Modulo para manipulacion del usuario
import express from "express";
import { cnx } from "./bdatos.js";
export const ciudadano = express();
// CRUD basico de ciudadanos

// Listar todos los ciudadanos
ciudadano.get("/ciudadano/listartodos", (req, res) => {
  // hacer la consulta
  let sql = "SELECT * FROM ciudadano ORDER BY apellidos";
  // ejecutar la consulta en la base de datos
  cnx.query(sql, (err, results, fields) => {
    // console.log(err);
    // console.log(results);
    // console.log(fields);
    res.send({ results });
  });
});

// Listar ciudadano por ID
ciudadano.get("/ciudadano/listarporid/:id", (req, res) => {
  // Recibimos el parametro de la consulta
  let id = req.params.id;
  // hacer la consulta, por seguridad use consultas parametrizadas
  let sql = `SELECT * FROM ciudadano WHERE codigo=?`;
  // let sql2 = `SELECT * FROM ciudadano WHERE codigo= ${id}`;

  // ejecutar la consulta en la base de datos
  cnx.query(sql, [id], (err, results, fields) => {
    res.status(200).send({ results });
  });
});

// Borrar registro - Borrado real
ciudadano.delete("/ciudadano/borrarporid/:id", (req, res) => {
  // Recibimos el parametro de la consulta
  let id = req.params.id;
  // hacer la consulta, por seguridad use consultas parametrizadas
  let sql = `DELETE FROM ciudadano WHERE codigo=?`;
  // let sql2 = `SELECT * FROM ciudadano WHERE codigo= ${id}`;

  // ejecutar la consulta en la base de datos
  cnx.query(sql, [id], (err, results, fields) => {
    res.status(200).send({ results });
  });
});

// Crear ciudadanos
ciudadano.post("/ciudadano/crear", (req, res) => {
  // Recibimos los parametros enviados en la consulta - payload - body en un objeto JS
  let datosFormulario = {
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
  console.log(datosFormulario);

  // hacer la consulta, por seguridad use consultas parametrizadas
  let sql = `INSERT INTO ciudadano SET ?;`;

  // ejecutar la consulta en la base de datos
  cnx.query(sql, [datosFormulario], (err, results, fields) => {
    res.status(200).send({ results });
  });
});

// Editar: recibir una payload en el body de la peticion (request) y el ID
ciudadano.put("/ciudadano/editar/:id", (req, res) => {
  // Recibimos los parametros enviados en la consulta - payload - body en un objeto JS
  let id = req.params.id;
  let datosFormulario = {
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
  console.log(datosFormulario);

  // hacer la consulta, por seguridad use consultas parametrizadas
  let sql = `UPDATE ciudadano SET ? WHERE codigo = ?;`;

  // ejecutar la consulta en la base de datos
  cnx.query(sql, [datosFormulario, id], (err, results, fields) => {
    res.status(200).send({ results });
  });
});

// Hacer el modulo de usuarios y las pruebas en post
