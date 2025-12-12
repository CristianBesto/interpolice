//?MODULO PARA MIPULACION DEL USUARIO

import express from 'express';
import { cnx } from './bdatos.js';

export const ciudadano = express();

//crud basico de ciudadanos

//?Listar todos los ciudadanos

ciudadano.get('/ciudadano/listartodos', (request, response) => {

    //*:Hacer la consulta a la base de datos
    let sql = 'SELECT * FROM ciudadano ORDER BY apellido';

    //*Ejecutar la consulta en la base de datos
    cnx.query(sql, (error, result, fields) => {
        // console.log(result);
        // console.log(fields);
        // console.log(error);
        response.send({result});
    });

    //*devolver la data en formato json

});


//?Listar ciudadanos por ID

ciudadano.get('/ciudadano/listarporid/:id', (request, response) => {

    //*Recibimos el parametro de la consulta 
    let id = request.params.id;
    //*Hacer la consulta a la base de datos, por seguridad usar consultas parametrizadas
    let sql = 'SELECT * FROM ciudadano WHERE codigo=?';
    // let sql2 = `select * from ciudadano where id=${id}`; //!no recomendado por inyeccion sql

    //*Ejecutar la consulta en la base de datos
    cnx.query(sql, [id], (error, result, fields) => {
        response.status(200).send({result});
    });

    //*devolver la data en formato json

});

//?Borrado registro -- Borrado Real DB

ciudadano.delete('/ciudadano/borrarporid/:id', (request, response) => {

    //*Recibimos el parametro de la consulta 
    let id = request.params.id;

    //*Hacer la consulta a la base de datos, por seguridad usar consultas parametrizadas
    let sql = 'DELETE FROM ciudadano WHERE codigo=?';

    //*Ejecutar la consulta en la base de datos
    cnx.query(sql, [id], (error, result, fields) => {
        response.status(200).send({result});
    });

    //*devolver la data en formato json

});

//?Crear un ciudadano nuevo

ciudadano.post('/ciudadano/crear', (request, response) => {

    //*Recibimos los parametros enviados en la consulta - playload - body en un objeto js
    let datosFormulario = {
        nombre: request.body.nombre,
        apellido: request.body.apellido,
        apodo: request.body.apodo,
        fechaNace: request.body.fechaNace,
        planetaOrigen: request.body.planetaOrigen,
        planetaReside: request.body.planetaReside,
        foto: request.body.foto,
        codigoQr: request.body.codigoQr,
        estado: request.body.estado,
    };

    console.log(datosFormulario);

    //*Hacer la consulta a la base de datos, por seguridad usar consultas parametrizadas
    let sql = 'INSERT INTO ciudadano SET ?';

    //*Ejecutar la consulta en la base de datos
    cnx.query(sql, [datosFormulario], (error, result, fields) => {
        response.status(200).send({result});
    });

    //*devolver la data en formato json

});


//? EDITAR RECIBIR UNA PAYLOAD EN EL BODY DE LA PETICION REQUEST y el id

ciudadano.put('/ciudadano/editar/:id', (request, response) => {

    //*Recibimos el parametro de la consulta 
    let id = request.params.id;

    //*Recibimos los parametros enviados en la consulta - playload - body en un objeto js
    let datosFormulario = {
        nombre: request.body.nombre,
        apellido: request.body.apellido,
        apodo: request.body.apodo,
        fechaNace: request.body.fechaNace,
        planetaOrigen: request.body.planetaOrigen,
        planetaReside: request.body.planetaReside,
        foto: request.body.foto,
        codigoQr: request.body.codigoQr,
        estado: request.body.estado,
    };

    //*Hacer la consulta a la base de datos, por seguridad usar consultas parametrizadas
    let sql = 'UPDATE ciudadano SET ? WHERE codigo = ?';

    //*Ejecutar la consulta en la base de datos
    cnx.query(sql,[datosFormulario,id],(error, result, fields) => {
        response.status(200).send({result});
    });

    //*devolver la data en formato json

});