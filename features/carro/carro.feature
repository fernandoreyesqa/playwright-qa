# language: es

@carro
Característica: Carro de compra casos de pruebas

    Escenario: Carro compra - Eliminar producto desde el carro de compra
        Dado Que el usuario visualiza el login
        Cuando El usuario ingresa sus credenciales
        Y El usuario agrega un producto al carro
        Y El usuario hace clic en el boton del carrito
        Y El usuario elimina el producto desde el carrito
        Entonces El sistema elimina el producto del carrito

    Escenario: Carro compra - eliminar producto y validar que el badge desaparece
        Dado Que el usuario visualiza el login
        Cuando El usuario ingresa sus credenciales
        Y El usuario agrega un producto al carro
        Y El usuario hace clic en el boton del carrito
        Y El usuario elimina el producto desde el carrito
        Entonces El badge del carro desaparece
    
    Escenario: Carro compra - hacer clic en el nombre del producto y validar que navega al detalle
        Dado Que el usuario visualiza el login
        Cuando El usuario ingresa sus credenciales
        Y El usuario agrega un producto al carro
        Y El usuario hace clic en el boton del carrito
        Y El usuario hace clic en el nombre del producto en el carrito
        Entonces El sistema navega al detalle del producto
    
    Escenario: Carro compra - validar que el boton Continue Shopping regresa al inventario
        Dado Que el usuario visualiza el login
        Cuando El usuario ingresa sus credenciales
        Y El usuario hace clic en el boton del carrito
        Y El usuario hace clic en Continue Shopping
        Entonces El sistema regresa al inventario
    
    Escenario: Carro compra - validar que el boton Checkout navega al formulario
        Dado Que el usuario visualiza el login
        Cuando El usuario ingresa sus credenciales
        Y El usuario agrega un producto al carro
        Y El usuario hace clic en el boton del carrito
        Y El usuario hace clic en Checkout
        Entonces El sistema navega al formulario de checkout