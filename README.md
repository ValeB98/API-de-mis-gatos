# API de Gatos

Esta es una API REST creada con **Node.js** y **Express** que simula una base de datos en memoria con todos los gatos que he tenido.  
Permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre una lista de gatos usando rutas HTTP.

---

## Endpoints disponibles

- `GET /gatos` - Devuelve todos los gatos.
- `POST /gatos` - Agrega un nuevo gato (requiere JSON en el body).
- `PUT /gatos/:id` - Actualiza un gato por su ID.
- `DELETE /gatos/:id` - Elimina un gato por su ID.

## Demostración en video

Puedes ver cómo uso esta API desde cero con Postman en el siguiente video:

[Ver video en este repositorio](/demostracion%20de%20api%20en%20video.mp4)

---

## ¿Cómo usarla?

1. Asegúrate de que tienes **Node.js** instalado.
2. Descarga o clona este repositorio.
3. En la terminal ubícate en la carpeta donde están los archivos y ejecuta:

```bash
npm install
node index.js

- Abre tu navegador o Postman en:
http://localhost:3000/gatos