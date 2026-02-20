# BITACORA DEL PROYECTO

# HERRAMIENTAS DEL BACK

Gestor de base de datos: MySQL - Maria DB

express: FrameWork de Node JS => Gestionar APIS usando protocolo http
Node JS: JS standalone - Instalado en mi PC => en consola: node -v
Nodemon: Plugin para usar en desarrollo - no se USA en producción
mysql2: Gestionar las interacciones con la BD - ORM (sequelize)
CORS: Plugin para la gestion de CORS (consumo de recursos entre diferentes IPs)
env: Variables globales del proyecto (credenciales, rutas)

# HERRAMIENTAS FRONT

CSS: Framework Boostrap
BUNDLE: Vite --(webpack)
Vanilla JS

## PASO A PASO BACKEND

- Inicializar el proyecto con Node JS - npm init
- Instalar los paquetes requeridos : npm install nodemon mysql2 cors env express
- Configurar el control de versiones del codigo: crear el .gitignore
- Iniciar el seguimiento del repositorio: git init, git add .
- Creamos el repo en la nube: GitHub
- Conectamos el repo de la nube con el repo local
  git remote add origin https://github.com/DanielRN-SOFT/Interpolice_NodeJS.git
  git push -u origin main
- Hacemos la primer actualizacion local y remota:
  local: git commit -m "Inicio del proyecto"
  remota: git push -u origin main
- Revision del package.json: verificar las dependencias
- Modificamos el package para ejecucion del proyecto:
  "start": "node index.js" (Modo producción o despligue)
  "dev": "nodemon index.js" (Modo desarrollo o development)

## Codificacion del proyecto

- Crear el archivo principal: index.js
- Configurar los plugins: nodemon, cors, hacer la primer prueba
  npm run dev(modo desarrollador) npm start(modo produccion)

## Creacion del modulo conexion a la base de datos

- Importamos la libreria mysql2 y hacemos la conexion de acuerdo al ejemplo

## Codificacion del modulo ciudadano

## IMPLEMENTACION DE ARQUITECTURA POR CAPAS (N-TIER)

### CAPAS PRINCIPALES:
CONTROLLERS: Controlador del modulo, maneja la logica de peticiones y respuestas

ROUTES: Se encarga de construir los endpoint o rutas de la api, en ella podemos inyectar los middlewares

MODELS: Se encarga de la interaccion (consultas) con el sistema gestor de base de datos (SGBD), implenta la logica del negocio

### CAPAS DE SOPORTE:
MIDDLEWARE: Capa intermedia entre el cliente y la API (Ejemplo validar token, validar IP por CORS)

HELPERS: Ayudas, ayudantes, clases o funciones reusables del sistema, por ejemplo un sistema de errores

## CONFIGURACION DE VARIABLES DE ENTORNO / GLOBALES
Sirven para mejorar la confidencialidad, mejor mantenibilidad en node js : variables env.
instalar paquete dotenv y configurarlo (Nota node js ya lo implemeneta nativo)
- npm i deotenv
- crear archivo .env en la rais del proyecto 
- ver el ejemplo de archivo .env (recuerde crear estilo constante)
