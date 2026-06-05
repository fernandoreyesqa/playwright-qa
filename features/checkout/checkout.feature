# language: es

@checkout 
Característica: Casos de pruebas checkout

    
    Escenario: Checkout - Validar todos los campos obligatorios
        Dado Que el usuario visualiza el login
        Cuando El usuario ingresa sus credenciales
        Y El usuario agrega un producto al carro
        Y El usuario hace clic en el boton del carrito
        Y El usuario hace clic en Checkout
        Y El usuario no rellena la informacion y hace clic en el boton continuar
        Entonces El sistema mostrara un mensaje de error
    
    Escenario: Checkout - Validar todos los campos obligatorios (Solo se ingresa el first name)
        Dado Que el usuario visualiza el login
        Cuando El usuario ingresa sus credenciales
        Y El usuario agrega un producto al carro
        Y El usuario hace clic en el boton del carrito
        Y El usuario hace clic en Checkout
        Y El usuario solo rellena el first name y hace clic en el boton continuar
        Entonces El sistema mostrara un mensaje de error
    @ordenar
    Escenario: Checkout - Validar todos los campos obligatorios (Solo se ingresa el first name y last name)
        Dado Que el usuario visualiza el login
        Cuando El usuario ingresa sus credenciales
        Y El usuario agrega un producto al carro
        Y El usuario hace clic en el boton del carrito
        Y El usuario hace clic en Checkout
        Pero Se ingresa solo el first name y last name y se hace clic en continuar
        Entonces El sistema mostrara un mensaje de error

    Escenario: Checkout - Se rellena