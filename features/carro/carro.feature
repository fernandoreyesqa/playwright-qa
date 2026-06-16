# language: es

Característica: Carrito de compras - SauceDemo
  Como usuario autenticado en SauceDemo
  Quiero gestionar los productos en mi carrito de compras
  Para poder revisar, modificar el carro de mi pedido

  Antecedentes:
    Dado que el usuario navega a "https://www.saucedemo.com"
    Y el usuario ingresa el nombre de usuario "standard_user"
    Y el usuario ingresa la contraseña
    Y el usuario hace clic en el botón login
    Y el usuario es redirigido a "https://www.saucedemo.com/inventory.html"
    
  Escenario:Visualizar ingreso al carro de compras
    Dado que el usuario no ha agregado ningún producto al carrito
    Cuando el usuario hace clic en el ícono del carrito
    Entonces el usuario es redirigido a "https://www.saucedemo.com/cart.html"
    
  Escenario: Visualizar un producto agregado desde el inventario
    Dado que el usuario hace clic en el add to cart de la pagina inventario
    Cuando el usuario hace clic en el ícono del carrito
    Entonces el usuario es redirigido a "https://www.saucedemo.com/cart.html"
    Y se visualiza el producto agregado
    
  Escenario:Visualizar múltiples productos en el carrito
    Dado que el usuario selecciona 2 productos al carro
    Cuando el usuario hace clic en el ícono del carrito
    Entonces El sistema mostrara 2 productos en el carro
    
  # ─────────────────────────────────────────────────────────────
  # BLOQUE 2: ELIMINACIÓN DE PRODUCTOS
  # ─────────────────────────────────────────────────────────────
    
  Escenario: Eliminar un producto del carrito
    Dado que el usuario agregar un producto y hace clic en el carro de compra
    Y el usuario navega a "https://www.saucedemo.com/cart.html"
    Cuando el usuario hace clic en el botón remover del carro
    Entonces el contenedor no tendra el boton remove
   
  Escenario: Eliminar un producto específico de un carrito con múltiples ítems
    Dado que el usuario agrega 2 productos al carro de compra
    Y el usuario hace clic en el carro de compra
    Y el usuario navega a "https://www.saucedemo.com/cart.html"
    Cuando el usuario hace clic en el botón remove de uno de los productos
    Entonces el contenedor tendra exactamente 1 remove
     
  # ─────────────────────────────────────────────────────────────
  # BLOQUE 3: NAVEGACIÓN DESDE EL CARRITO
  # ─────────────────────────────────────────────────────────────
  
  Escenario:Regresar al inventario mediante el botón "Continue Shopping"
    Dado que el usuario hace clic en el carro de compra
    Y el usuario navega a "https://www.saucedemo.com/cart.html"
    Cuando el usuario hace clic en el botón continuar shoping
    Entonces el usuario es redirigido a "https://www.saucedemo.com/inventory.html"
  
  Escenario: Los productos agregados persisten en el carrito al regresar al inventario
    Dado que el usuario agregar un producto y hace clic en el carro de compra
    Y el usuario navega a "https://www.saucedemo.com/cart.html"
    Cuando el usuario hace clic en el botón continuar shoping
    Y el usuario agrega otro producto
    Y el usuario hace clic en el ícono del carrito
    Entonces el sistema mostrara los 2 productos en el carro
   
  
  Escenario: Navegar al detalle de un producto haciendo clic en su nombre desde el carrito
    Dado que el usuario agregar un producto y hace clic en el carro de compra
    Y el usuario navega a "https://www.saucedemo.com/cart.html"
    Cuando el usuario hace clic en el titulo del producto 
    Entonces el usuario es redirigido a una URL que contiene "https://www.saucedemo.com/inventory-item.html"
  
  # ─────────────────────────────────────────────────────────────
  # BLOQUE 4: INICIO DEL PROCESO DE CHECKOUT
  # ─────────────────────────────────────────────────────────────
  
  Escenario:Navegar al checkout con al menos un producto en el carrito
    Dado que el usuario agregar un producto y hace clic en el carro de compra
    Y el usuario navega a "https://www.saucedemo.com/cart.html"
    Cuando el usuario hace clic en el botón checkout
    Entonces el usuario es redirigido a "https://www.saucedemo.com/checkout-step-one.html"
  # ─────────────────────────────────────────────────────────────
  # BLOQUE 5: MENÚ HAMBURGUESA DESDE EL CARRITO
  # ─────────────────────────────────────────────────────────────
  
  Escenario:Abrir y cerrar el menú de navegación desde la página del carrito
    Dado que el usuario navega a "https://www.saucedemo.com/cart.html"
    Cuando el usuario hace clic al menu de hamburgueza
    Entonces el sistema mostrara las 4 opciones All Items, About, Logout y Reset App State
 
  Escenario: Cerrar sesión desde el menú en la página del carrito
    Dado que el usuario navega a "https://www.saucedemo.com/cart.html"
    Cuando el usuario hace clic al menu de hamburgueza
    Y el usuario hace clic en logout
    Entonces el usuario es redirigido a "https://www.saucedemo.com"
   
  Escenario: Navegar a "All Items" desde el menú en la página del carrito
    Dado que el usuario navega a "https://www.saucedemo.com/cart.html"
    Cuando el usuario hace clic al menu de hamburgueza
    Y el usuario hace clic en all items
    Entonces el usuario es redirigido a "https://www.saucedemo.com/inventory.html"

