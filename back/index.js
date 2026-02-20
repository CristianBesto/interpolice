// Crea una constante con el puerto local o el asignado en las variables globales de la aplicacion

import app from "./src/app.js";
import dotenv from "dotenv";// importa la libreria para manejar variables de entorno //!NO DEBE IR AQUI ES SOLAMENTE PARA EL EJEMPLO DEL POYECTO
require('dotenv').config(); 
dotenv.config(); // Carga las variables de entorno desde el archivo .env
const port = 3000 || process.env.PORT;
// Encendemos el servicio - prendemos la API
app.listen(port, () => {
  console.log(`Servidor corriendo en: ${port}`);
  console.log(process.env); //TODAS las variables de entorno
  console.log(process.env.OS); // SISTEMA OPERATIVO EN QUE SE EJECUTA NODE
  console.log(process.env.NUMBER_OF_PROCESSORS); // NUMERO DE PROCESADORES DEL SERVIDOR DONDE SE EJECUTA NODE
  console.log(process.env.NODE); // RUTA DONDE SE EJECUTA NODE
  console.log(process.env.COMPUTERNAME); // NOMBRE DEL COMPUTADOR DONDE SE EJECUTA NODE
  console.log(process.env.HOST); // HOST DONDE SE EJECUTA NODE
  console.log(process.env.DB_BASE); // NOMBRE DE LA BASE DE DATOS DONDE SE EJECUTA NODE
});
