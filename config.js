const mysql = require("mysql2/promise");

// Configuración conexión MySQL
const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Ferz.2026",
    database: "user_cli"
});

module.exports = connection;