# language: es

@invetario
Característica: Inventory casos de pruebas

    Antecedentes:
        Dado que el usuario accede a saudemo
        Y ingresa credenciales válidas de usuario estándar
        Y hace clic en el botón Login
        Entonces el usuario es redirigido a "https://www.saucedemo.com/inventory.html"

    
    Escenario: Visualización correcta del catálogo de productos
        Dado que el usuario está en la página de inventario
        Entonces se muestran exactamente 6 productos en la grilla
        Y cada producto contiene un elemento con el título visible
        Y cada producto contiene un elemento con la descripción visible
        Y cada producto contiene un elemento con el precio visible
        Y cada producto contiene una imagen con atributo src no vacío
        Y cada producto contiene un botón Add to cart

    
    Escenario: Verificación de datos reales de los 6 productos
        Dado que el usuario está en la página de inventario
        Entonces el inventario contiene el producto <producto> con precio <precio>
        Ejemplos:
            | producto                            | precio  |
            | "Sauce Labs Backpack"               | "$29.99" |
            | "Sauce Labs Bike Light"             | "$9.99"  |
            | "Sauce Labs Bolt T-Shirt"           | "$15.99" |
            | "Sauce Labs Fleece Jacket"          | "$49.99" |
            | "Sauce Labs Onesie"                 | "$7.99"  |
            | "Test.allTheThings() T-Shirt (Red)" | "$15.99" |
       

    
    Escenario: Agregar un producto al carrito desde el inventario
        Dado que el usuario está en la página de inventario
        Y el badge del carrito no está visible
        Cuando hace clic en el botón "Add to cart" del producto "Sauce Labs Backpack"
        Entonces el botón del producto cambia su texto a "Remove"
        Y el badge del carrito muestra el valor "1"

    
    Escenario: Agregar múltiples productos y validar acumulación del badge
        Dado que el usuario está en la página de inventario
        Cuando hace clic en "Add to cart" del producto "Sauce Labs Backpack"
        Y hace clic en "Add to cart" del producto "Sauce Labs Bike Light"
        Y hace clic en "Add to cart" del producto "Sauce Labs Bolt T-Shirt"
        Entonces el badge del carrito muestra el valor "3"
        Y los tres botones correspondientes muestran el texto "Remove"

    
    Escenario: Quitar un producto del carrito desde el inventario
        Dado que el usuario está en la página de inventario
        Y ha agregado el producto "Sauce Labs Bike Light" al carrito
        Cuando hace clic en el botón "Remove" del producto "Sauce Labs Bike Light"
        Entonces el botón del producto cambia su texto a "Add to cart"
        Y el badge del carrito no está visible
    
    
    Escenario: Navegar al carrito desde el ícono superior derecho
        Dado que el usuario está en la página de inventario
        Cuando hace clic en el ícono del carrito ubicado en el header
        Entonces el usuario es redirigido a "https://www.saucedemo.com/cart.html"
    
    
    Escenario: Ordenar productos por nombre de A a Z
        Dado que el usuario está en la página de inventario
        Cuando selecciona la opción Name A to Z del selector de ordenamiento
        Entonces el primer producto de la grilla es "Sauce Labs Backpack"
        Y el último producto de la grilla es "Test.allTheThings() T-Shirt (Red)"
    
    
    Escenario: Ordenar productos por nombre de Z a A
        Dado que el usuario está en la página de inventario
        Cuando selecciona la opción Name Z to A del selector de ordenamiento
        Entonces el primer producto de la grilla es "Test.allTheThings() T-Shirt (Red)"
        Y el último producto de la grilla es "Sauce Labs Backpack"
    
    
    Escenario: Ordenar productos por precio de menor a mayor
        Dado que el usuario está en la página de inventario
        Cuando selecciona la opción Price low to high del selector de ordenamiento
        Entonces el primer producto de la grilla es "Sauce Labs Onesie" con precio "$7.99"
        Y el último producto de la grilla es "Sauce Labs Fleece Jacket" con precio "$49.99"
    
    Escenario: Ordenar productos por precio de mayor a menor
        Dado que el usuario está en la página de inventario
        Cuando selecciona la opción Price high to low del selector de ordenamiento
        Entonces el primer producto de la grilla es "Sauce Labs Fleece Jacket" con precio "$49.99"
        Y el último producto de la grilla es "Sauce Labs Onesie" con precio "$7.99"
    
    Escenario: Regresar al inventario desde el detalle de producto
        Dado que el usuario está en la página de detalle de un producto
        Cuando hace clic en el botón Back to products
        Entonces el usuario es redirigido a "https://www.saucedemo.com/inventory.html"
        Y se muestran los 6 productos en la grilla

    
    Escenario: Cerrar sesión desde el menú hamburguesa
        Dado que el usuario está en la página de inventario
        Y ha abierto el menú hamburguesa
        Cuando hace clic en la opción Logout
        Entonces el usuario es redirigido a "https://www.saucedemo.com"
        Y el campo de usuario está vacío
        Y el botón Login es visible
