// Capa modelo para el modulo de ciudadanos

// Importamos la conexion
import { db } from "./bdatos.js";

// Activar el manejo de promesas (asincronica);
//const db = cnx.promise();

// Creamos el modulo : usando el concepto de orientado a objetos
// Clase modelo correspondiente a ciudadano
export const CiudadanoModel = {
  // Listar todos : Aplicamos funciones asincronicas para aprovechar las promesas (Los hilos de ejecucion)

  findALL: async () => {
    const sql = "SELECT * FROM ciudadano ORDER BY apellido";
    // Almacenamos la respuesta en un arreglo
    const [rows] = await db.query(sql);
    return rows;
  },
  // Buscar por ID, recibe el ID como parametro
  findById: async (id) => {
    const sql = "SELECT * FROM ciudadano WHERE codigo = ?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },
  // Borramos teniendo en cuenta el ID que llega del controlador por parametro
  delete: async (id) => {
    const sql = "DELETE FROM ciudadano WHERE codigo = ?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },
  create: async (data) => {
    const sql = "INSERT INTO ciudadano SET ?";
    const [rows] = await db.query(sql, [data]);
    return rows;
  },
  update: async (id, data) => {
    const sql = "UPDATE ciudadano SET ? WHERE codigo = ?";
    const [rows] = await db.query(sql, [data, id]);
    return rows;
  },
};
