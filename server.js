const express = require("express"); // Importar Express para crear el servidor
const axios = require("axios"); // Importar Axios para realizar solicitudes HTTP
const app = express(); // Crear una instancia de la aplicación Express
const PORT = process.env.PORT || 3000; // Definir el puerto del servidor, utilizando el puerto proporcionado por el entorno o el puerto 3000 por defecto
const cors = require("cors"); // Importar CORS para permitir solicitudes desde otros dominios

// Habilitar CORS
app.use(cors());

// Endpoint para obtener la lista de razas de perros
app.get("/api/razas", async (req, res) => {
  try {
    // Realizar una solicitud GET a la API externa que proporciona la lista de razas de perros
    const response = await axios.get("https://dog.ceo/api/breeds/list/all");
    // Enviar la respuesta JSON con los datos obtenidos de la API externa
    res.json(response.data);
  } catch (error) {
    // Enviar una respuesta de error si ocurre algún problema al obtener las razas de perros
    res.status(500).json({ error: "Error al obtener las razas de perros" });
  }
});

// Endpoint para obtener una imagen aleatoria de una raza de perro específica
app.get("/api/imagen/:raza", async (req, res) => {
  try {
    // Obtener el parámetro de la URL que representa la raza de perro
    const raza = req.params.raza;
    // Realizar una solicitud GET a la API externa para obtener una imagen aleatoria de la raza de perro específica
    const response = await axios.get(
      `https://dog.ceo/api/breed/${raza}/images/random`
    );

    // Enviar la respuesta JSON con los datos obtenidos de la API externa
    res.json(response.data);
  } catch (error) {
    // Enviar una respuesta de error si ocurre algún problema al obtener la imagen de la raza de perro
    res
      .status(500)
      .json({ error: "Error al obtener la imagen de la raza de perro" });
  }
});

// Iniciar el servidor y escuchar las solicitudes en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor Node.js iniciado en el puerto ${PORT}`);
});
