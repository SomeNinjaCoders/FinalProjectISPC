
CREATE DATABASE IF NOT EXISTS bd_lunazul;


USE bd_lunazul;


CREATE TABLE IF NOT EXISTS Usuario (
    idusuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE, 
    contrasena VARCHAR(255) NOT NULL 
);


CREATE TABLE IF NOT EXISTS CarritoDeCompra (
    idcarrito INT AUTO_INCREMENT PRIMARY KEY,
    idusuario INT NOT NULL, -- Clave foránea para relacionar con Usuario
    idproducto INT NOT NULL, -- Clave foránea para relacionar con Producto
    descuento DECIMAL(10, 2), -- Cambiado a DECIMAL para el precio del producto
    FOREIGN KEY (idusuario) REFERENCES Usuario(idusuario),
    FOREIGN KEY (idproducto) REFERENCES Producto(id)
);


CREATE TABLE IF NOT EXISTS Producto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    precio DECIMAL(10, 2), 
    descripcion TEXT 
);

