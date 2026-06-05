# language: es

@login
Característica: Login usuario casos de pruebas

    Escenario: Login - exitoso
        Dado  Que el usuario navege por el Login
        Cuando El usuario ingresa su usuario y contraseña
        Entonces  El sistema ingresar a la pagina de invetario

    Escenario: Login erroneo - ingreso solo el usuario
        Dado  Que el usuario navege por el Login
        Cuando El usuario ingresar solo el usuario
        Entonces El sistema mostrara un mensaje indicando error

    Escenario: Login erroneo - ingresa solo la contraseña
        Dado Que el usuario navege por el Login
        Cuando El usuario ingresa solo la contraseña
        Entonces El sistema mostrara un mensaje indicando error

    Escenario: Login erroneo - no ingresa usuario y contraseña
        Dado Que el usuario navege por el Login
        Cuando El usuario no ingresa el usuario y contraseña
        Entonces El sistema mostrara un mensaje indicando error

    Escenario: Login erroneo - Usuario incorrecto
        Dado Que el usuario navege por el Login
        Cuando El usuario ingresa un usuario que no corresponde
        Entonces El sistema indica error de usuario