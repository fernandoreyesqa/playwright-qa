# language: es

@invetario
Característica: Inventory casos de pruebas

    Escenario: Inventory - Ingreso a la pagina inventario
        Dado Que el usuario visualiza el login
        Cuando El usuario ingresa sus credenciales
        Entonces El sistema mostrara la pagina de inventario

    Escenario: Inventory - cvisualizar todos los productos (6)
        Dado Que el usuario visualiza el login
        Cuando El usuario ingresa sus credenciales
        Entonces El sistema visualiza la cantidad de productos

    Escenario: Inventory - ingresar al detalle de un producto
        Dado Que el usuario visualiza el login
        Cuando El usuario ingresa sus credenciales
        Y El usuario ingreso al detalle del producto
        Entonces El sistema mostrara el detalle del producto

    Escenario:Inventory - agregar producto al carro
        Dado Que el usuario visualiza el login
        Cuando El usuario ingresa sus credenciales
        Y El usuario ingresa un porducto al carro
        Entonces El sistema mostrara un producto en el carro

    Escenario:inventory - Validar que cada producto tiene título, precio e imagen
        Dado Que el usuario visualiza el login
        Cuando El usuario ingresa sus credenciales
        Entonces Cada producto debe tener titulo precio e imagen
    
    Escenario:Inventory - ordenar productos de A-Z
        Dado Que el usuario visualiza el login
        Cuando El usuario ingresa sus credenciales
        Y El usuario ordena los productos de A-Z
        Entonces El primer producto debe ser Sauce Labs Backpack

    
    Escenario:inventory - Ordenar productos de Z-A 
        Dado Que el usuario visualiza el login
        Cuando El usuario ingresa sus credenciales
        Y El usuario ordena los productos de Z-A
        Entonces el primer producto debe ser Test.allTheThings T-Shirt Red
    
    Escenario:inventory - Ordenar por precio menor a mayor
        Dado Que el usuario visualiza el login
        Cuando El usuario ingresa sus credenciales
        Y El usuario ordena de menor a mayor
        Entonces El primer porducto debe ser Suece Labs Onesie
    
    Escenario:inventory - Ordenar por precio mayor a menor
        Dado Que el usuario visualiza el login
        Cuando El usuario ingresa sus credenciales
        Y El usuario ordena de mayor a menor
        Entonces El primer producto debe ser Sauce Labs Fleece Jacket
    
    Escenario:Inventory - Agregar dos productos y validar badge en 2
        Dado Que el usuario visualiza el login
        Cuando El usuario ingresa sus credenciales
        Y El usuario agrega dos productos al carro
        Entonces El sistema muestra 2 productos en el carro
    
    Escenario: Inventory - Agregar un producto y luego eliminarlo (Remove) y validar que el badge desaparece
        Dado Que el usuario visualiza el login
        Cuando El usuario ingresa sus credenciales
        Y  El usuario agrega un producto y luego lo elimina
        Entonces El sistema no mostrara el producto agregado
    
    Escenario:inventory - Hacer clic en la imagen y validar que navega al detalle
        Dado Que el usuario visualiza el login
        Cuando El usuario ingresa sus credenciales
        Y El usuario hace clic en la imagen
        Entonces El sistema mostrara el detalle del producto con la imagen
    
    Escenario:inventory - Desde el detalle hacer clic en "Back to products" y validar que vuelve al inventory
        Dado Que el usuario visualiza el login
        Cuando El usuario ingresa sus credenciales
        Y Ingresa al detalle del producto
        Y seleeciona back to products
        Entonces El sistema volvera a la pagina de inventory
    
    Escenario:Validar que el botón del carrito navega al cart
        Dado Que el usuario visualiza el login
        Cuando El usuario ingresa sus credenciales
        Y El usuario ingresa al carro de compra
        Entonces El sistema cargara el carro de compra
    
    Escenario:inventory - Abrir el menú hamburguesa y validar las opciones disponibles
        Dado Que el usuario visualiza el login
        Cuando El usuario ingresa sus credenciales
        Y El usuario ingresa al menu
        Entonces El sistema mostrara las opciones disponibles

    Escenario:Hacer clic en "Logout" desde el menú y validar que vuelve al login
        Dado Que el usuario visualiza el login
        Cuando El usuario ingresa sus credenciales
        Y el usuario hace clic en Logout
        Entonces El sistema redirige al login