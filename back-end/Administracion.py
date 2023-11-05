# main.py
from administracion import Administracion
from carrito import Carrito
from cliente import Cliente
from detalle_carrito import DetalleCarrito
from pago import Pago
from productos import Productos

# Create instances of your classes
cliente1 = Cliente(1, "Edgar", "Herrera", "123456789", "edgar@example.com", "password123")
carrito1 = Carrito(1, "ProductA", 2, 50.0, "Active", "2023-11-05 12:00:00", cliente1, None)
pago1 = Pago(1, "Credit Card", 100.0, "2023-11-05", "Online", "Paid", carrito1)
producto1 = Productos(1, "ProductA", "DescriptionA", 25.0, 100, "CategoryA")
detalle_carrito1 = DetalleCarrito(1, carrito1, producto1, 2, 50.0)
admin1 = Administracion(1, "Edgar", "Herrera", "987654321", "edgar@example.com", "adminpass", cliente1)

# Accessing attributes
print(cliente1.nombre)
print(carrito1.producto)
print(pago1.monto)
print(producto1.cantidad_stock)
print(detalle_carrito1.cantidad)
print(admin1.nombre_admin)



