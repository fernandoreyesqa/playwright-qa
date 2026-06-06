# language: es
@login
Característica: Autenticación de usuarios en Saucedemo
  Como usuario del sistema
  Quiero iniciar sesión con mis credenciales
  Para acceder al inventario de productos

  Antecedentes:
    Dado que el usuario navega a saucedemo
    Y la página de login está completamente cargada

  # ─────────────────────────────────────────────
  # ESCENARIOS DE LOGIN EXITOSO
  # ─────────────────────────────────────────────
  
  Escenario: Login exitoso con usuario estándar
    Dado que el usuario ingresa el nombre de usuario standard_user
    Y el usuario ingresa la contraseña
    Cuando el usuario hace clic en el botón Login
    Entonces el sistema redirige al usuario a "/inventory.html"
  @ordenar
  Escenario: Login exitoso con usuario con problemas visuales (problem_user)
    Dado que el usuario ingresa el nombre de usuario "problem_user"
    Y el usuario ingresa la contraseña 
    Cuando el usuario hace clic en el botón Login
    Entonces el sistema redirige al usuario a "/inventory.html"
    Y la página carga el inventario de productos
    Y se evidencian anomalías visuales en las imágenes de los productos

  Escenario: Login exitoso con usuario de error funcional (error_user)
    Dado que el usuario ingresa el nombre de usuario "error_user"
    Y el usuario ingresa la contraseña "secret_sauce"
    Cuando el usuario hace clic en el botón "Login"
    Entonces el sistema redirige al usuario a "/inventory.html"
    Y la página carga el inventario de productos
    Y se evidencian errores funcionales durante la interacción con la aplicación

  Escenario: Login exitoso con usuario visual (visual_user)
    Dado que el usuario ingresa el nombre de usuario "visual_user"
    Y el usuario ingresa la contraseña "secret_sauce"
    Cuando el usuario hace clic en el botón "Login"
    Entonces el sistema redirige al usuario a "/inventory.html"
    Y la página carga el inventario de productos
    Y se evidencian defectos de diseño o maquetación en la interfaz

  # ─────────────────────────────────────────────
  # ESCENARIOS DE COMPORTAMIENTO ESPECIAL
  # ─────────────────────────────────────────────

  Escenario: Login con degradación de rendimiento (performance_glitch_user)
    Dado que el usuario ingresa el nombre de usuario "performance_glitch_user"
    Y el usuario ingresa la contraseña "secret_sauce"
    Cuando el usuario hace clic en el botón "Login"
    Entonces el sistema introduce un retraso de varios segundos antes de redirigir
    Y finalmente el usuario es redirigido a "/inventory.html"
    Y el inventario de productos es visible

  # ─────────────────────────────────────────────
  # ESCENARIOS DE LOGIN FALLIDO — USUARIOS BLOQUEADOS
  # ─────────────────────────────────────────────

  Escenario: Login fallido con usuario bloqueado (locked_out_user)
    Dado que el usuario ingresa el nombre de usuario "locked_out_user"
    Y el usuario ingresa la contraseña "secret_sauce"
    Cuando el usuario hace clic en el botón "Login"
    Entonces el sistema no redirige al inventario
    Y se muestra el mensaje de error "Epic sadface: Sorry, this user has been locked out."
    Y el ícono de error es visible en los campos de usuario y contraseña
    Y el usuario permanece en la página de login

  # ─────────────────────────────────────────────
  # ESCENARIOS DE VALIDACIÓN DE CAMPOS VACÍOS
  # ─────────────────────────────────────────────

  Escenario: Login fallido con campos vacíos
    Dado que el campo de usuario está vacío
    Y el campo de contraseña está vacío
    Cuando el usuario hace clic en el botón "Login"
    Entonces el sistema muestra el mensaje de error "Epic sadface: Username is required"
    Y el usuario permanece en la página de login

  Escenario: Login fallido con contraseña vacía
    Dado que el usuario ingresa el nombre de usuario "standard_user"
    Y el campo de contraseña está vacío
    Cuando el usuario hace clic en el botón "Login"
    Entonces el sistema muestra el mensaje de error "Epic sadface: Password is required"
    Y el usuario permanece en la página de login

  Escenario: Login fallido con usuario vacío
    Dado que el campo de usuario está vacío
    Y el usuario ingresa la contraseña "secret_sauce"
    Cuando el usuario hace clic en el botón "Login"
    Entonces el sistema muestra el mensaje de error "Epic sadface: Username is required"
    Y el usuario permanece en la página de login

  # ─────────────────────────────────────────────
  # ESCENARIOS DE CREDENCIALES INVÁLIDAS
  # ─────────────────────────────────────────────

  Escenario: Login fallido con contraseña incorrecta
    Dado que el usuario ingresa el nombre de usuario "standard_user"
    Y el usuario ingresa la contraseña "wrong_password"
    Cuando el usuario hace clic en el botón "Login"
    Entonces el sistema muestra el mensaje de error "Epic sadface: Username and password do not match any user in this service"
    Y el usuario permanece en la página de login

  Escenario: Login fallido con usuario inexistente
    Dado que el usuario ingresa el nombre de usuario "usuario_invalido"
    Y el usuario ingresa la contraseña "secret_sauce"
    Cuando el usuario hace clic en el botón "Login"
    Entonces el sistema muestra el mensaje de error "Epic sadface: Username and password do not match any user in this service"
    Y el usuario permanece en la página de login

  Escenario: Login fallido con credenciales completamente incorrectas
    Dado que el usuario ingresa el nombre de usuario "fake_user"
    Y el usuario ingresa la contraseña "fake_password"
    Cuando el usuario hace clic en el botón "Login"
    Entonces el sistema muestra el mensaje de error "Epic sadface: Username and password do not match any user in this service"
    Y el usuario permanece en la página de login

  # ─────────────────────────────────────────────
  # ESCENARIOS DE CIERRE DE ERROR
  # ─────────────────────────────────────────────

  Escenario: Cierre del mensaje de error tras login fallido
    Dado que el usuario intentó iniciar sesión con credenciales inválidas
    Y el sistema muestra un mensaje de error en pantalla
    Cuando el usuario hace clic en el botón "X" del mensaje de error
    Entonces el mensaje de error desaparece de la pantalla
    Y los íconos de error en los campos de usuario y contraseña desaparecen

  # ─────────────────────────────────────────────
  # ESCENARIOS DE SEGURIDAD Y ACCESO DIRECTO
  # ─────────────────────────────────────────────

  Escenario: Acceso directo a inventario sin sesión activa
    Dado que el usuario no ha iniciado sesión
    Cuando el usuario navega directamente a "https://www.saucedemo.com/inventory.html"
    Entonces el sistema redirige al usuario a la página de login
    Y se muestra el mensaje "Epic sadface: You can only access '/inventory.html' when you are logged in."

  Escenario: Verificación de enmascaramiento de contraseña
    Dado que el usuario está en la página de login
    Cuando el usuario ingresa texto en el campo de contraseña
    Entonces el campo muestra los caracteres como puntos (tipo "password")
    Y el valor real no es visible en pantalla