// Importar librerias y conexiones
import express from "express";
import 'dotenv/config';
import cors from 'cors';
import connectDB from "./config/db.js";
import dns from 'node:dns';
import productsRouter from "./routers/products.js";

// Declaración de variables
const server = express();
const PORT = process.env.PORT || 3000;

// Metodo para solucionar el problema de conexión DNS a la Base Datos
if (process.env.NODE_ENV !== 'production') {
  dns.setServers(['8.8.8.8', '8.8.4.4']);
}

// Conexión a la base de Datos
connectDB();

// Llamando los metodos de producción
server.use(cors());
server.use(express.json());
server.use('/productos', productsRouter);

// Metodos para identificar rutas de respuesta
server.get('/',(req,res)=>{
    res.send('Hello World!')
});

server.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`);
});