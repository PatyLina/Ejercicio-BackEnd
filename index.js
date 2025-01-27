
import express from "express";
import { EnrutadorArticulo } from "./routes/articulosRoutes.js";
import { Articulo } from "./models/Articulo.js";


const app= express();

app.use(express.json());

const PORT=3030;

app.use('/api/articulos',EnrutadorArticulo(Articulo));

app.listen(PORT,()=>{
     console.log("Servidor a la espera");
})
