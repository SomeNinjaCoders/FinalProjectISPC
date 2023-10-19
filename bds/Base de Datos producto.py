class Producto:
    def __init__(self, idProducto, precio, descripcion):
        self.idProducto = idProducto
        self.precio = precio
        self.descripcion = descripcion

    def mostrar(self):
        # Lógica para mostrar información del producto

        print(f"ID del Producto: {self.idProducto}")
        print(f"Precio: {self.precio}")
        print(f"Descripción: {self.descripcion}")