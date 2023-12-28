// Libreria y Modulo: Express, Libro
const express = require("express");
const libro = require("../models/libro");
// Inicializacion del router para los libros
const router = express.Router();

// Ruta para obtener todos los libros
router.get("/", async (req, res) => {
  try {
    const libros = await libro.find();
    res.json(libros);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los libros" });
  }
});

// Ruta para obtener un libro por ID
router.get("/:id", async (req, res) => {
  try {
    const libro = await libro.findById(req.params.id);
    res.send(libro);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el Libro" });
  }
});

// Ruta para crear un nuevo Libro
router.post("/", async (req, res) => {
  try {
    const nuevolibro = new libro(req.body);
    await nuevolibro.save();
    res.json(nuevolibro);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el Libro" });
  }
});

// Ruta para actualizar un Libro existente
router.put("/:id", async (req, res) => {
  try {
    const libro = await libro.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(libro);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el Libro" });
  }
});

// Ruta para eliminar un Libro
router.delete("/:id", async (req, res) => {
  try {
    await libro.findByIdAndDelete(req.params.id);
    res.json({ message: "libro eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el Libro" });
  }
});

module.exports = router;