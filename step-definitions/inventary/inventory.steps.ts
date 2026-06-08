import { Given, When, Then, IWorld } from '@cucumber/cucumber';
import { LoginPage } from 'pageobjesct/loginPage';
import { inventoryPage } from 'pageobjesct/inventoryPage';
import { detallPage } from 'pageobjesct/detalle';

Given('que el usuario accede a saudemo', async function(this: IWorld){
    await this.login.navegar();
})

When('ingresa credenciales válidas de usuario estándar', async function(this: IWorld){
    await this.login.ingresoUsuario();
    await this.login.ingresoContraseña();
})

When('hace clic en el botón Login', async function(this: IWorld){
    await this.login.clickButon();
})

Then('el usuario es redirigido a {string}', async function(this: IWorld, url: string){
    await this.login.navegarUrl(url);
})

Given('que el usuario está en la página de inventario', async function(this: IWorld){
    await this.inventario.ingresoInventaru();
})

Then('se muestran exactamente 6 productos en la grilla', async function(this: IWorld){
    await this.inventario.validarCantidadProductos();
})

When('cada producto contiene un elemento con el título visible', async function(this: IWorld){
    await this.inventario.validarCantidadProductosTitulos();
})

When('cada producto contiene un elemento con la descripción visible', async function(this: IWorld){
    await this.inventario.validarCantidadProductosDescripcion();
})

When('cada producto contiene un elemento con el precio visible', async function(this: IWorld){
    await this.inventario.validarCantidadProductosPrecio();
})

When('cada producto contiene una imagen con atributo src no vacío', async function(this: IWorld){
    await this.inventario.validarCantidadProductoImagen();
})

When('cada producto contiene un botón Add to cart', async function(this: IWorld){
    await this.inventario.validarBotonesAddToCart()
})

Then('el inventario contiene el producto {string} con precio {string}', async function(this: IWorld, nombre: string, precio: string){
    await this.inventario.validarProductoConPrecio(nombre,precio)
})

When('el badge del carrito no está visible', async function(this: IWorld){
    await this.inventario.validarCarroEnCero()
})

When('hace clic en el botón "Add to cart" del producto {string}', async function(this: IWorld, producto: string){
    await this.inventario.clickAddToCart(producto);
})

Then('el botón del producto cambia su texto a "Remove"', async function(this: IWorld){
    await this.inventario.validarBtnCambiaARemove('Sauce Labs Backpack');
})

Then('el badge del carrito muestra el valor {string}', async function(this: IWorld, cantidad: string){
    await this.inventario.validarBadgeCarro(cantidad);
})

Then('los tres botones correspondientes muestran el texto "Remove"', async function(this: IWorld){
    await this.inventario.validarBtnCambiaARemove('Sauce Labs Backpack');
})

When('hace clic en "Add to cart" del producto {string}', async function(this: IWorld, producto: string){
    await this.inventario.clickAddToCart(producto);
})

When('ha agregado el producto {string} al carrito', async function(this: IWorld, producto: string){
    await this.inventario.clickAddToCart(producto);
})

When('hace clic en el botón "Remove" del producto {string}', async function(this: IWorld, nombre: string){
    await this.inventario.clickRemoveProducto(nombre);
})

Then('el botón del producto cambia su texto a "Add to cart"', async function(this: IWorld){
    await this.inventario.validarBotonesAddToCart()
})

When('hace clic en el ícono del carrito ubicado en el header', async function(this: IWorld){
    await this.inventario.ingresoCarroCompra();
})

When('selecciona la opción Name A to Z del selector de ordenamiento', async function(this: IWorld){
    await this.inventario.ordenarAZ();
})

Then('el primer producto de la grilla es {string}', async function (this:IWorld, nombre: string)   {
    await this.inventario.validarPrimeProducto(nombre);
})

Then('el último producto de la grilla es {string}', async function(this:IWorld, nombre: string){
    await this.inventario.validarUltimoProducto(nombre);
})

When('selecciona la opción Name Z to A del selector de ordenamiento', async function(this: IWorld){
    await this.inventario.ordenarZA();
})

When('selecciona la opción Price low to high del selector de ordenamiento', async function(this: IWorld){
    await this.inventario.ordenarMenoMayor();
})

Then('el primer producto de la grilla es {string} con precio {string}', async function(this:IWorld, nombre: string, precio: string){
    await this.inventario.validarPrimerProductoPrecio(nombre,precio)
})

Then('el último producto de la grilla es {string} con precio {string}', async function(this: IWorld, nombre: string, precio: string){
    await this.inventario.validarUltimoProductoPrecio(nombre,precio)
})

When('selecciona la opción Price high to low del selector de ordenamiento', async function(this: IWorld){
    await this.inventario.ordenarMayorMenor();
})

When('hace clic en el título del producto', async function(this:  IWorld){
    await this.inventario.ingresoDetalle()
})

When('el usuario es redirigido a la URL que contiene {string}', async function(this: IWorld, url: string){
    await this.login.navegarUrl(url);
})

Given('que el usuario está en la página de detalle de un producto', async function(this: IWorld){
    await this.inventario.ingresoDetalle()
})

When('hace clic en el botón Back to products', async function(this: IWorld){
    await this.inventario.volverPaginaInventario()
})

Then('se muestran los 6 productos en la grilla', async function(this: IWorld){
    await this.inventario.validarCantidadProductos();
})

When('ha abierto el menú hamburguesa', async function(this: IWorld){
    await this.inventario.abrirMenu();
})

When('hace clic en la opción Logout', async function(this: IWorld){
    await this.inventario.clickLogout();
})

Then('el campo de usuario está vacío', async function(this: IWorld){
    await this.login.usuarioVacio();
})

Then('el botón Login es visible', async function(this: IWorld){
    await this.login.loginVisible();
})