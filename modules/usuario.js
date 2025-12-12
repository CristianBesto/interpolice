//?MODULO PARA LA MANIPULACION DEL USUARIO

import express from 'express';
import { cnx } from './bdatos.js';

export const usuario = express();

//!VAMOS A CREAR UN CRUD BASICO DE USUARIOS

//?Listar todos los usuarios

usuario.get('/usuario/listartodos', (request, response) => {

    //*:Hacer la consulta a la base de datos
    let sql = 'SELECT * FROM usuarios ORDER BY apellido';

    //*Ejecutar la consulta en la base de datos
    cnx.query(sql, (error, result, fields) => {
        response.send({ result });
    });
});

//?LISTAR TODOS LOS CIUDADANOS POR ID

usuario.get('/usuario/listarporid/:id', (request, response) => {

    //*Recibimos el parametro de la consulta
    let id = request.params.id;
    //*Hacer la consulta a la base de datos, por seguridad usar consultas parametrizadas
    let sql = 'SELECT * FROM usuarios WHERE codigo=?';

    //*Ejecutar la consulta en la base de datos
    cnx.query(sql, [id], (error, result, fields) => {
        response.status(200).send({ result });
    });
});

//?BORRADO REGISTRO -- BORRADO REAL DB
usuario.delete('/usuario/borrarporid/:id', (request, response) => {

    //*Recibimos el parametro de la consulta
    let id = request.params.id;
    //*Hacer la consulta a la base de datos, por seguridad usar consultas parametrizadas
    let sql = 'DELETE FROM usuarios WHERE codigo=?';

//*Ejecutar la consulta en la base de datos
    cnx.query(sql, [id], (error, result, fields) => {
        response.status(200).send({ result });
    });
});

//?CREAR NUEVO USUARIO - INSERT

usuario.post('/usuario/crear', (request, response) => {
//*Recibimos los datos del nuevo usuario en el body del request
    let datosFormulario = {
        nombre: request.body.nombre,
        apellido: request.body.apellido,
        email: request.body.email,
        password: request.body.password,
        avatar: request.body.avatar,
        rol: request.body.rol,
    };
//*Crear la consulta sql de insercion
    let sql = 'INSERT INTO usuarios SET ?';

//*Ejecutar la consulta en la base de datos
    cnx.query(sql, [datosFormulario], (error, result, fields) => {
        response.status(201).send({ result });
    });
});

//?editar usuario existente - UPDATE

usuario.put('/usuario/editarporid/:id', (request, response) => {
    //*Recibimos el parametro de la consulta
    let id = request.params.id;
    //*Recibimos los datos del usuario a editar en el body del request
    
        let datosFormulario = {
        nombre: request.body.nombre,
        apellido: request.body.apellido,
        email: request.body.email,
        password: request.body.password,
        avatar: request.body.avatar,
        rol: request.body.rol,
    };
//*Crear la consulta sql de actualizacion
    let sql = 'UPDATE usuarios SET ? WHERE codigo=?';

//*Ejecutar la consulta en la base de datos
    cnx.query(sql, [datosFormulario, id], (error, result, fields) => {
        response.status(200).send({ result });
    });
});