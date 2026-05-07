-- Script de creación para el Trabajo Práctico: CLI de Gestión de Usuarios

-- 1. Crear la base de datos
CREATE DATABASE IF NOT EXISTS user_management;
USE user_management;

-- 2. Borrar la tabla si ya existe para evitar errores en pruebas repetidas
DROP TABLE IF EXISTS users;

-- 3. Crear la tabla de usuarios
CREATE TABLE users (
    id VARCHAR(36) NOT NULL,            -- Almacena el UUID generado en Node.js
    username VARCHAR(100) NOT NULL,     -- Nombre de usuario requerido
    email VARCHAR(100) NOT NULL,        -- Email requerido
    password VARCHAR(100) NOT NULL,     -- Password requerido
    PRIMARY KEY (id)                    -- Definición de clave primaria
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

