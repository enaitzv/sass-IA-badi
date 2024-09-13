// Importa el módulo express
const express = require('express');

// Inicializa la aplicación
const app = express();

// Define una ruta básica
app.get('/api/saludo', (req, res) => {
  res.json({ message: '¡Hola desde el backend!' });
});

// Inicia el servidor en el puerto 3001
app.listen(3001, () => {
  console.log('Servidor escuchando en el puerto 3001');
});
