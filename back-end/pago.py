# pago.py
from carrito import Carrito

class Pago:
    def __init__(self, id_pago, tipo_pago, monto, fecha_pago, metodo_pago, estado_pago, carrito):
        self.id_pago = id_pago
        self.tipo_pago = tipo_pago
        self.monto = monto
        self.fecha_pago = fecha_pago
        self.metodo_pago = metodo_pago
        self.estado_pago = estado_pago
        self.carrito = carrito  # Assuming Carrito object
