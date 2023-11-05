# detalle_carrito.py
from carrito import Carrito
from productos import Productos

class DetalleCarrito:
    def __init__(self, id_detalle, carrito, producto, cantidad, precio_total_producto):
        self.id_detalle = id_detalle
        self.carrito = carrito  # Assuming Carrito object
        self.producto = producto  # Assuming Productos object
        self.cantidad = cantidad
        self.precio_total_producto = precio_total_producto
