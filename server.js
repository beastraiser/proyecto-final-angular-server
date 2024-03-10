const express = require("express");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint para obtener la lista de razas de perros
app.get("/api/razas", async (req, res) => {
  try {
    const response = await axios.get("https://dog.ceo/api/breeds/list/all");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las razas de perros" });
  }
});

// Endpoint para obtener una imagen aleatoria de una raza de perro específica
app.get("/api/imagen/:raza", async (req, res) => {
  try {
    const raza = req.params.raza;
    const response = await axios.get(
      `https://dog.ceo/api/breed/${raza}/images/random`
    );
    res.json(response.data);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al obtener la imagen de la raza de perro" });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Node.js iniciado en el puerto ${PORT}`);
});
