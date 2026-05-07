const {
    getUsers,
    addUser,
    updateUser,
    deleteUser
} = require("./controllers");

// Obtener argumentos
const args = process.argv.slice(2);

const command = args[0];

// ===============================
// COMANDOS
// ===============================

switch (command) {

    case "get":
        getUsers();
        break;

    case "add":
        addUser(args[1], args[2], args[3]);
        break;

    case "update":
        updateUser(args[1], args[2], args[3], args[4]);
        break;

    case "delete":
        deleteUser(args[1]);
        break;

    default:
        console.log(`
Comandos disponibles:

1. Obtener usuarios
node index.js get

2. Crear usuario
node index.js add <username> <email> <password>

3. Actualizar usuario
node index.js update <username> <email> <password> <id>

4. Eliminar usuario
node index.js delete <id>
        `);
}