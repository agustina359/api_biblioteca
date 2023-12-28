// middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
    //Verificar si el error tiene un código, de lo contrario queda definido en 500
    const statusCode = err.statusCode || 500;
// Objecto: Mensaje de error
const errorResponse = {
error: {
message: err.message || "Error interno del servidor",
code: err.code || "internal_error",
},
};
//respuesta  en formato JSON
res.status(statusCode).json(errorResponse);
};
module.exports = errorHandler;