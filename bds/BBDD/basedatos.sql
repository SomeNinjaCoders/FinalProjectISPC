-- Tabla Cliente
CREATE TABLE Cliente (
    IdCliente INT PRIMARY KEY,
    Nombre VARCHAR(50),
    Apellido VARCHAR(50),
    Telefono VARCHAR(15),
    Correo VARCHAR(100),
    Contrasena VARCHAR(50)
);

-- Tabla Carrito
CREATE TABLE Carrito (
    IdCarrito INT PRIMARY KEY,
    Producto VARCHAR(50),
    Cantidad INT,
    PrecioTotal DECIMAL(10, 2),
    EstadoCarrito VARCHAR(20),
    FechaCreacion TIMESTAMP,
    IdCliente INT,
    IdPago INT,
    FOREIGN KEY (IdCliente) REFERENCES Cliente(IdCliente),
    FOREIGN KEY (IdPago) REFERENCES Pago(IdPago)
);

-- Tabla Pago
CREATE TABLE Pago (
    IdPago INT PRIMARY KEY,
    TipoPago VARCHAR(20),
    Monto DECIMAL(10, 2),
    FechaPago DATE,
    MetodoPago VARCHAR(50),
    EstadoPago VARCHAR(20),
    IdCarrito INT,
    FOREIGN KEY (IdCarrito) REFERENCES Carrito(IdCarrito)
);

-- Tabla Productos
CREATE TABLE Productos (
    IdProducto INT PRIMARY KEY,
    NombreProducto VARCHAR(50),
    Descripcion VARCHAR(255),
    PrecioUnitario DECIMAL(10, 2),
    CantidadStock INT,
    Categoria VARCHAR(50)
);

-- Tabla DetalleCarrito
CREATE TABLE DetalleCarrito (
    IdDetalle INT PRIMARY KEY,
    IdCarrito INT,
    IdProducto INT,
    Cantidad INT,
    PrecioTotalProducto DECIMAL(10, 2),
    FOREIGN KEY (IdCarrito) REFERENCES Carrito(IdCarrito),
    FOREIGN KEY (IdProducto) REFERENCES Productos(IdProducto)
);

-- Tabla Administracion
CREATE TABLE Administracion (
    IdAdmin INT PRIMARY KEY,
    NombreAdmin VARCHAR(50),
    ApellidoAdmin VARCHAR(50),
    TelefonoAdmin VARCHAR(15),
    CorreoAdmin VARCHAR(100),
    ContrasenaAdmin VARCHAR(50),
    IdCliente INT,
    FOREIGN KEY (IdCliente) REFERENCES Cliente(IdCliente)
);
