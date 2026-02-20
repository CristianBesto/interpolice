// Modulo para conexión a la base de datos
import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config(); // Carga las variables de entorno desde el archivo .env

const PORT = 3000 || process.env.APP_PORT;
let cnx;
try {
  cnx = mysql.createPool({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_BASE,
    port: process.env.DB_PORT,
    waitForConnections: true, 
    connectionLimit: 10,
    queueLimit: 0,
  });
  const conexion = await cnx.getConnection();
  console.log(`Conexion exitosa ${conexion.threadId}`);
  conexion.release(); // Libera la conexión después de usarla cierra la conexion de prueba

  //   console.log(`Conexion exitosa ${connection}`);
} catch (error) {
  console.error(`Ha ocurrido un error en la conexion: ${error.message}`);
}

export const db = cnx;
