import express from "express";
import { cnx } from "./bdatos.js";

export const usuario = express();

usuario.get("/usuario/listartodos", (req, res) => {
  let sql = "SELECT * FROM usuario";
  cnx.query(sql, (err, results, fields) => {
    res.send({ results });
  });
});

usuario.get("/usuario/listarporid/:id", (req, res) => {
  let id = req.params.id;

  let sql = "SELECT * FROM usuario WHERE id = ?";

  cnx.query(sql, [id], (err, results, fields) => {
    res.send({ results });
  });
});

usuario.delete("/usuario/borrarporid/:id", (req, res) => {
  let id = req.params.id;

  let sql = "DELETE FROM usuario WHERE id = ?";

  cnx.query(sql, [id], (err, results, fields) => {
    res.send({ results });
  });
});

usuario.post("/usuario/crear", (req, res) => {
  let datosFormulario = {
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    email: req.body.email,
    password: req.body.password,
    avatar: req.body.avatar,
    rol: req.body.rol,
  };

  let sql = "INSERT INTO usuario SET ?;";
  cnx.query(sql, [datosFormulario], (err, results, fields) => {
    res.send({ results });
  });
});

usuario.put("/usuario/editar/:id", (req, res) => {
  let id = req.params.id;
  let datosFormulario = {
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    email: req.body.email,
    password: req.body.password,
    avatar: req.body.avatar,
    rol: req.body.rol,
  };

  let sql = "UPDATE usuario SET ? WHERE id = ?"

  cnx.query(sql, [datosFormulario, id], (err, results, fields) => {
    res.send({results});
  })
});
