//libreria: Mongoose
const mongoose = require("mongoose");

// Conectamos el proyecto a la base de datos "biblioteca"
mongoose.connect("mongodb://localhost:27017/biblioteca");

// Creamos el formato JSON del libro
const LibroSchema = new mongoose.Schema(
    {
     titulo: String,
     autor: String,
    },
  // Se almacenaran en la coleccion libros
  { collection: "libros" }
);

// Clase Libro
const Libro = mongoose.model("Libro", LibroSchema);

module.exports = Libro;