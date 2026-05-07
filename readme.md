# CLI de Gestión de Usuarios (Node.js + MySQL)

Este proyecto es una herramienta de línea de comandos (CLI) desarrollada para gestionar usuarios en una base de datos relacional MySQL. Permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) de forma asíncrona y modularizada.

---

## 📋 Requisitos Previos

- **Node.js:** Versión 16 o superior.
- **MySQL:** Servidor activo (Localhost).
- **Dependencias:** Se utiliza el driver `mysql2` para manejar la conexión de forma eficiente mediante promesas.

---

## 🚀 Instalación y Configuración

### 1. Instalar dependencias

Dentro de la carpeta `user-cli`, ejecuta:

```bash
npm install
```

---

### 2. Configurar la Base de Datos

Utiliza el archivo `database_schema.sql` para crear la estructura necesaria.

El script creará automáticamente:

- La base de datos `user_management`
- La tabla `users`

Campos incluidos:

- `id`
- `username`
- `email`
- `password`

---

### 3. Configurar credenciales

Asegúrate de que el archivo `config.js` tenga tus datos locales:

```javascript
host: 'localhost',
user: 'tu_usuario', // Cambiar por tu usuario de MySQL
password: 'tu_password', // Cambiar por tu contraseña
database: 'user_management'
```

---

## 🛠️ Comandos de la Aplicación

La interacción se realiza pasando argumentos directamente en la terminal.

---

### 1. Obtener todos los usuarios

Muestra una tabla con la lista completa de usuarios almacenados.

```bash
node index.js get
```

---

### 2. Crear un nuevo usuario

Genera un ID único (UUID) automáticamente.

#### Validaciones

- Todos los campos son obligatorios.
- El email debe terminar en `@gmail.com`.

```bash
node index.js add "NombreUsuario" "usuario@gmail.com" "password123"
```

---

### 3. Actualizar un usuario

Modifica los datos de un registro existente buscando por su ID.

```bash
node index.js update "NombreNuevo" "nuevo@gmail.com" "nuevaPass" "ID-DEL-USUARIO"
```

---

### 4. Eliminar un usuario

Borra permanentemente un usuario de la base de datos mediante su ID.

```bash
node index.js delete "ID-DEL-USUARIO"
```

---

## 📂 Estructura del Proyecto

| Archivo | Descripción |
|---|---|
| `index.js` | Punto de entrada que procesa los argumentos de consola (`process.argv`). |
| `controllers.js` | Contiene la lógica de negocio y las funciones CRUD asíncronas. |
| `config.js` | Maneja el Pool de conexiones a MySQL para mayor eficiencia. |
| `database_schema.sql` | Script SQL para la creación de la base de datos y tablas. |
| `package.json` | Definición del proyecto y dependencias instaladas. |

---

## 🔒 Características Técnicas

- **Asincronismo:** Uso de `async/await` en todas las consultas a la DB.
- **IDs Únicos:** Generación de UUIDs mediante el módulo nativo `crypto`.
- **Seguridad:** Validación de longitud mínima de password y formato de email.
- **Legibilidad:** Interfaz limpia utilizando `console.table()` para visualizar los datos.

---

## 🎓 Trabajo Práctico

**Diplomatura Full Stack Developer**