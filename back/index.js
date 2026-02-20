import app from "./src/app.js";
import dotenv from "dotenv";

dotenv.config(); // Solo una vez, sin require()

const port = process.env.PORT || 3000; // El orden importa, primero el de Render

app.listen(port, () => {
  console.log(`Servidor corriendo en: ${port}`);
  console.log(process.env.HOST);
  console.log(process.env.DB_BASE);
});
