# language: es

Característica: Checkout - SauceDemo
  Como usuario autenticado en SauceDemo
  Quiero gestionar los productos en mi carrito de compras
  Para poder revisar, modificar y proceder al checkout de mi pedido

   Antecedentes:
    Dado que el usuario navega a "https://www.saucedemo.com"
    Y el usuario ingresa el nombre de usuario "standard_user"
    Y el usuario ingresa la contraseña
    Y el usuario hace clic en el botón login
    Y el usuario es redirigido a "https://www.saucedemo.com/inventory.html"
    Y que el usuario agregar un producto y hace clic en el carro de compra
    
    
    Escenario:Visualizar ingreso al checkout
        Dado que el usuario hace clic en el boton checkout
        Entonces el usuario es redirigido a "https://www.saucedemo.com/checkout-step-one.html"
    
    Escenario: Se ingresa texto solo el first name en el checkout
        Dado que el usuario hace clic en el boton checkout
        Entonces el usuario es redirigido a "https://www.saucedemo.com/checkout-step-one.html"
        Y el usuario ingresa "prueba" en el input de first name
        Y hace clic en el boton continuar
        Entonces el sistema mostrara mensaje de error de campos faltantes
    
    Escenario: Se ingresa textos en los campos fisrt name y last name
        Dado que el usuario hace clic en el boton checkout
        Entonces el usuario es redirigido a "https://www.saucedemo.com/checkout-step-one.html"
        Y el usuario ingresa "prueba" en el input de first name
        Y el usuario ingresa "qa" en el input de last name
        Y hace clic en el boton continuar
        Entonces el sistema mostrara mensaje de error de campos faltantes
    
    Escenario: Se rellena el formulario del checkout
        Dado que el usuario hace clic en el boton checkout
        Entonces el usuario es redirigido a "https://www.saucedemo.com/checkout-step-one.html"
        Y el usuario ingresa "prueba" en el input de first name
        Y el usuario ingresa "qa" en el input de last name
        Y el usuario ingresa "1234" en el input zip codigo postal
        Y hace clic en el boton continuar
        Entonces el usuario es redirigido a "https://www.saucedemo.com/checkout-step-two.html"

  # ─────────────────────────────────────────────────────────────
  # BLOQUE 2: Redireccion y menu hamburgueza
  # ─────────────────────────────────────────────────────────────
    
    Escenario: Ingreso menu haburgueza
        Dado que el usuario hace clic en el boton checkout
        Entonces el usuario es redirigido a "https://www.saucedemo.com/checkout-step-one.html"
        Y el usuario hace clic en el menu
        Entonces el sistema mostrara las opciones all items, about, logout y reset app store
    
    Escenario:Seleccion all item desde el menu
        Dado que el usuario hace clic en el boton checkout
        Entonces el usuario es redirigido a "https://www.saucedemo.com/checkout-step-one.html"
        Y el usuario hace clic en el menu
        Entonces el sistema mostrara las opciones all items, about, logout y reset app store
        Y el usuario hace clic en la opcion all items
        Entonces el usuario es redirigido a "https://www.saucedemo.com/inventory.html"
    
    Escenario: Seleccion about desde el menu
        Dado que el usuario hace clic en el boton checkout
        Entonces el usuario es redirigido a "https://www.saucedemo.com/checkout-step-one.html"
        Y el usuario hace clic en el menu
        Entonces el sistema mostrara las opciones all items, about, logout y reset app store
        Y el usuario hace clic en la opcion about
        Entonces el usuario es redirigido a "https://saucelabs.com/"
   
    Escenario: Seleccion logout desde el menu
        Dado que el usuario hace clic en el boton checkout
        Entonces el usuario es redirigido a "https://www.saucedemo.com/checkout-step-one.html"
        Y el usuario hace clic en el menu
        Entonces el sistema mostrara las opciones all items, about, logout y reset app store
        Y el usuario hace clic en la opcion logout
        Entonces el usuario es redirigido a "https://www.saucedemo.com/"
     
    Escenario: Click en el boton cancelar
        Dado que el usuario hace clic en el boton checkout
        Entonces el usuario es redirigido a "https://www.saucedemo.com/checkout-step-one.html"
        Y el usuario hace clic en el boton cancelar
        Entonces el usuario es redirigido a "https://www.saucedemo.com/inventory.html"

 # ─────────────────────────────────────────────────────────────
 # BLOQUE 3: checkout step two
 # ─────────────────────────────────────────────────────────────
    
    Escenario: Ingreso al checkout step two
        Dado que el usuario hace clic en el boton checkout
        Entonces el usuario es redirigido a "https://www.saucedemo.com/checkout-step-one.html"
        Y hace clic en el boton continuar
        Entonces el usuario es redirigido a "https://www.saucedemo.com/checkout-step-two.html"
        Y el usuario hace clic en el titulo del producto del checkout
        Entonces el usuario es redirigido a "https://www.saucedemo.com/inventory-item"
    @smoke
    Escenario: clic en el boton finish
        Dado que el usuario hace clic en el boton checkout
        Entonces el usuario es redirigido a "https://www.saucedemo.com/checkout-step-one.html"
        Y hace clic en el boton continuar
        Entonces el usuario es redirigido a "https://www.saucedemo.com/checkout-step-two.html"
        Y hace click en el boton finish
        Entonces el usuario es redirigido a "https://www.saucedemo.com/checkout-complete.html"



        