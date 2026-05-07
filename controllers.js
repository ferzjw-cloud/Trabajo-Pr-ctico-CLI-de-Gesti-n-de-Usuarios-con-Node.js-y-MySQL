const connection = require("./config");
const { v4: uuidv4 } = require("uuid");

// ===============================
// VALIDACIONES
// ===============================

// Validar email
function validateEmail(email) {
    return email.endsWith("@gmail.com");
}

// Validar password
function validatePassword(password) {
    return password.length >= 6;
}

// ===============================
// OBTENER USUARIOS
// ===============================

async function getUsers() {
    try {
        const [rows] = await connection.query("SELECT * FROM users");

        if (rows.length === 0) {
            console.log("No hay usuarios registrados.");
            return;
        }

        console.table(rows);

    } catch (error) {
        console.log("Error al obtener usuarios:");
        console.log(error.message);
    }
}

// ===============================
// CREAR USUARIO
// ===============================

async function addUser(username, email, password) {

    try {

        // Validar campos obligatorios
        if (!username || !email || !password) {
            console.log("Error: todos los campos son obligatorios.");
            return;
        }

        // Validar email
        if (!validateEmail(email)) {
            console.log("Error: el email debe terminar en @gmail.com");
            return;
        }

        // Validar password
        if (!validatePassword(password)) {
            console.log("Error: la contraseña debe tener al menos 6 caracteres.");
            return;
        }

        // Generar ID único
        const id = uuidv4();

        const sql = `
            INSERT INTO users (id, username, email, password)
            VALUES (?, ?, ?, ?)
        `;

        await connection.query(sql, [id, username, email, password]);

        console.log("Usuario creado correctamente.");
        console.log("ID:", id);

    } catch (error) {
        console.log("Error al crear usuario:");
        console.log(error.message);
    }
}

// ===============================
// ACTUALIZAR USUARIO
// ===============================

async function updateUser(username, email, password, id) {

    try {

        // Validaciones
        if (!username || !email || !password || !id) {
            console.log("Error: faltan datos.");
            return;
        }

        if (!validateEmail(email)) {
            console.log("Error: el email debe terminar en @gmail.com");
            return;
        }

        if (!validatePassword(password)) {
            console.log("Error: la contraseña debe tener mínimo 6 caracteres.");
            return;
        }

        // Verificar si existe
        const [user] = await connection.query(
            "SELECT * FROM users WHERE id = ?",
            [id]
        );

        if (user.length === 0) {
            console.log("Error: usuario no encontrado.");
            return;
        }

        // Actualizar
        const sql = `
            UPDATE users
            SET username = ?, email = ?, password = ?
            WHERE id = ?
        `;

        await connection.query(sql, [
            username,
            email,
            password,
            id
        ]);

        console.log("Usuario actualizado correctamente.");

    } catch (error) {
        console.log("Error al actualizar usuario:");
        console.log(error.message);
    }
}

// ===============================
// ELIMINAR USUARIO
// ===============================

async function deleteUser(id) {

    try {

        if (!id) {
            console.log("Error: debe ingresar un ID.");
            return;
        }

        // Verificar existencia
        const [user] = await connection.query(
            "SELECT * FROM users WHERE id = ?",
            [id]
        );

        if (user.length === 0) {
            console.log("Error: usuario no encontrado.");
            return;
        }

        // Eliminar
        await connection.query(
            "DELETE FROM users WHERE id = ?",
            [id]
        );

        console.log("Usuario eliminado correctamente.");

    } catch (error) {
        console.log("Error al eliminar usuario:");
        console.log(error.message);
    }
}

module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser
};