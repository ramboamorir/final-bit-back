# final-bit-back
## 👨‍💻 Autor: 
Daniel Armando Ciendúa Ricaurte

# 🛒 API REST - Gestión de Productos (Supermercado)

## 📌 Descripción

Este proyecto es una API REST desarrollada con Node.js y Express que permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre productos de un supermercado.

La aplicación se conecta a una base de datos MongoDB y expone endpoints que pueden ser consumidos mediante herramientas como Postman o integrarse con un frontend (por ejemplo Angular).

---

## 🚀 Tecnologías utilizadas

* Node.js
* Express.js
* MongoDB
* Mongoose
* TypeScript
* Postman

---

## 📂 Estructura del proyecto

```
src/
│
├── controllers/   # Lógica de negocio
├── models/        # Esquemas y tipado de datos
├── routers/       # Definición de rutas
├── middlewares/   # Validaciones y manejo de errores
│
└── server.js      # Punto de entrada del servidor
```

---

## ⚙️ Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
PORT=3000
MONGO_URI=tu_cadena_de_conexion_mongodb
```

### 4. Ejecutar el servidor

```bash
npm start
```

O en modo desarrollo:

```bash
npm run dev
```

---

## 🔌 Conexión a MongoDB

La conexión a la base de datos se realiza mediante Mongoose desde `server.js`:

```js
mongoose.connect(process.env.MONGO_HOST)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error(err));
```

---

## 📡 Endpoints principales

### 📦 Productos

| Método | Ruta          | Descripción                 |
| ------ | ------------- | --------------------------- |
| GET    | /products     | Obtener todos los productos |
| GET    | /products/:id | Obtener producto por ID     |
| POST   | /products     | Crear un nuevo producto     |
| PUT    | /products/:id | Actualizar un producto      |
| DELETE | /products/:id | Eliminar un producto        |

---

## 🔐 Uso de TypeScript y validaciones

El proyecto implementa TypeScript para definir estructuras de datos tipadas, lo que permite reducir errores y mejorar la mantenibilidad del código.

### 📦 Ejemplo de tipado

```ts
interface Product {
  name: string;
  price: number;
  stock: number;
  category: string;
}
```

### ✅ Validación de datos

Se implementan validaciones para asegurar:

* Campos obligatorios
* Tipos de datos correctos
* Valores válidos (ej: precio mayor a 0)

Las validaciones se aplican antes de llegar a los controladores mediante middlewares.

---

## 🛡️ Manejo de errores

El sistema incluye manejo de errores estructurado:

* 400 → Datos inválidos
* 404 → Recurso no encontrado
* 500 → Error interno del servidor

Esto permite una mejor experiencia al consumir la API y facilita el debugging.

---

## 🧠 Arquitectura

El proyecto sigue el patrón **MVC (Modelo - Vista - Controlador)**:

* **Models:** Definen la estructura de los datos en MongoDB
* **Controllers:** Contienen la lógica de negocio
* **Routers:** Gestionan las rutas de la API
* **Middlewares:** Validación y control de errores
* **server.js:** Configuración general y arranque del servidor

---

## 🧪 Pruebas con Postman

Para probar la API:

1. Ejecuta el servidor
2. Usa la siguiente URL base:

```
http://localhost:3000
```

3. Realiza peticiones a los endpoints definidos

---
