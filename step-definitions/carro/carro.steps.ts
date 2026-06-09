import { Given, When, Then, IWorld } from '@cucumber/cucumber';
import { Url } from 'url';

Given('que el usuario navega a {string}', async function(this: IWorld, url: string){
    await this.login.navegarUrl(url);
})

Given('que el usuario no ha agregado ningún producto al carrito', async function (this:IWorld) {
    await this.inventario.validarCantidadProductosTitulos();
})

When('el usuario hace clic en el ícono del carrito', async function(this: IWorld){
    await this.inventario.ingresoCarroCompra();
})

When('el usuario ingresa el nombre de usuario {string}', async function(this: IWorld, usuario: string) {
    await this.login.usuarioString(usuario);
})

When('el usuario hace clic en el botón login', async function(this: IWorld){
    await this.login.clickButon();
})

Given('que el usuario hace clic en el add to cart de la pagina inventario', async function(this: IWorld){
    await this.inventario.agregarAlCarro();
})

Then('se visualiza el producto agregado', async function(this: IWorld){
    await this.carro.productoEnCarro()
})

Given('que el usuario selecciona 2 productos al carro', async function(this: IWorld){
    await this.inventario.agregarDosProductos();
})

Then('El sistema mostrara 2 productos en el carro', async function(this: IWorld){
    await this.carro.productoEnCarro()
})

Given('que el usuario agregar un producto y hace clic en el carro de compra', async function(this: IWorld){
    await this.inventario.agregarAlCarro();
    await this.inventario.ingresoCarroCompra();
})

When('el usuario navega a {string}', async function(this: IWorld,url: string){
    await this.login.navegarUrl(url);
})

When('el usuario hace clic en el botón remover del carro', async function(this: IWorld){
    await this.carro.clickReomve();
})

Then('el contenedor no tendra el boton remove', async function(this: IWorld){
    await this.carro.clickReomveNoVisible();
})

When('el usuario hace clic en el carro de compra', async function(this: IWorld){
    await this.inventario.ingresoCarroCompra();
})

When('el usuario hace clic en el botón remove de uno de los productos', async function(this: IWorld){
    await this.carro.clickReomveConDosProdcutos();
})

Then('el contenedor tendra exactamente 1 remove', async function(this: IWorld){
    await this.carro.visualizarRemove();
})

Given('que el usuario agrega 2 productos al carro de compra', async function(this: IWorld){
    await this.inventario.agregarDosProductos();
})

Given('que el usuario hace clic en el carro de compra', async function(this: IWorld){
    await this.inventario.ingresoCarroCompra();
})

When('el usuario hace clic en el botón continuar shoping', async function(this: IWorld){
    await this.carro.clickContinueShoping();
})

When('el usuario agrega otro producto', async function(this: IWorld){
    await this.inventario.agregarOtroProducto();
})

Then('el sistema mostrara los 2 productos en el carro', async function(this: IWorld){
    await this.carro.productoEnCarro();
})

When('el usuario hace clic en el titulo del producto', async function(this: IWorld){
    await this.carro.clicTitulo();
})

When('el usuario es redirigido a una URL que contiene {string}', async function(this: IWorld, url: string){
    await this.login.navegarUrl(url);
})

When('el usuario hace clic en el botón checkout', async function(this: IWorld){
    await this.carro.irCheckout();
})

When('el usuario hace clic al menu de hamburgueza', async function(this: IWorld){
    await this.carro.clicMenu();
})

Then('el sistema mostrara las 4 opciones All Items, About, Logout y Reset App State', async function(this: IWorld){
    await this.carro.visualizarMenu();
})

Then('el usuario hace clic en logout', async function(this: IWorld){
    await this.carro.clicLogout();
})

Then('el usuario hace clic en all items', async function(this: IWorld){
    await this.carro.clicAllItems();
})

