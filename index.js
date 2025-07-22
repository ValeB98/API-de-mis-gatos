const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

//base de datos de los gatos que he tenido
let gatos = [
  { id: 1, nombre: "Dexter", color: "Blanco con naranja", sexo: "macho" },
  { id: 2, nombre: "Choco", color: "Marroncita atigrada", sexo: "hembra" },
  { id: 3, nombre: "Coffi", color: "Negra", sexo: "hembra" },
  { id: 4, nombre: "Ryuzaki", color: "Negra", sexo: "hembra" },
  { id: 5, nombre: "Coral", color: "Negra", sexo: "hembra" },
  { id: 6, nombre: "Jeffrey", color: "Naranja atigrado", sexo: "macho" },
  { id: 7, nombre: "Felix", color: "Blanco con negro", sexo: "macho" },
  { id: 8, nombre: "Haru", color: "Amarillo pálido semi atigrado", sexo: "macho" },
  { id: 9, nombre: "Amor", color: "Carey", sexo: "hembra" },
  { id: 10, nombre: "Mapachito", color: "Carey", sexo: "hembra" },
  { id: 11, nombre: "Ruso", color: "Gris", sexo: "macho" },
  { id: 12, nombre: "Gan", color: "Gris", sexo: "hembra" },
  { id: 13, nombre: "Sushine", color: "Tricolor", sexo: "hembra" },
  { id: 14, nombre: "Max", color: "Naranja", sexo: "macho" },
  { id: 15, nombre: "Limón", color: "Negro", sexo: "macho" },
  { id: 16, nombre: "Zeus", color: "Naranja", sexo: "macho" },
  { id: 17, nombre: "Ninno", color: "Negro", sexo: "macho" },
  { id: 18, nombre: "Zuki", color: "Atigrada", sexo: "hembra" },
  { id: 19, nombre: "Ámbar", color: "Atigrada", sexo: "hembra" },
  { id: 20, nombre: "Cocoa", color: "Siames", sexo: "hembra" },
  { id: 21, nombre: "Jiray", color: "Blanco con naranja", sexo: "macho" }
];

//GET - obtener todos los gatos
app.get("/gatos", (req, res) => {
  res.json(gatos);
});

//POST - agregar un nuevo gato
app.post("/gatos", (req, res) => {
  const nuevoGato = req.body;
  nuevoGato.id = gatos.length ? gatos[gatos.length - 1].id + 1 : 1;
  gatos.push(nuevoGato);
  res.status(201).json(nuevoGato);
});

//PUT - actualizar un gato por ID
app.put("/gatos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = gatos.findIndex(g => g.id === id);
  if (index !== -1) {
    gatos[index] = { id, ...req.body };
    res.json(gatos[index]);
  } else {
    res.status(404).json({ mensaje: "Gato no encontrado" });
  }
});

//DELETE - Eliminar un gato por ID
app.delete("/gatos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = gatos.findIndex(g => g.id === id);
  if (index !== -1) {
    const eliminado = gatos.splice(index, 1);
    res.json(eliminado[0]);
  } else {
    res.status(404).json({ mensaje: "Gato no encontrado" });
  }
});

//iniciar servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});