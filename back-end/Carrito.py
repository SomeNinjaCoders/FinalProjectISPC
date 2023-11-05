# carrito.py
from cliente import Cliente

class Carrito:
    def __init__(self, id_carrito, producto, cantidad, precio_total, estado_carrito, fecha_creacion, cliente, pago):
        self.id_carrito = id_carrito
        self.producto = producto
        self.cantidad = cantidad
        self.precio_total = precio_total
        self.estado_carrito = estado_carrito
        self.fecha_creacion = fecha_creacion
        self.cliente = cliente  # Assuming Cliente object
        self.pago = pago  # Assuming Pago object
