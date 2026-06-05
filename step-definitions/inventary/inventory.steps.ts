import { Given, When, Then, IWorld } from '@cucumber/cucumber';
import { LoginPage } from 'pageobjesct/loginPage';
import { inventoryPage } from 'pageobjesct/inventoryPage';
import { detallPage } from 'pageobjesct/detalle';

Given('Que el usuario visualiza el login', async function (this: IWorld){
    
    await this.login.navegar()
})

When('El usuario ingresa sus credenciales', async function (this: IWorld){

    await this.login.loginPositivo()
})

Then('El sistema mostrara la pagina de inventario',async function (this: IWorld){

    await this.inventori.ingresoInventaru()
})

Then('El sistema visualiza la cantidad de productos', async function (this: IWorld){

    await this.inventori.validarCantidadProductos()
})

When('El usuario ingreso al detalle del producto', async function (this: IWorld){
    

    this.textoTitulo = await this.inventario.ingresoDetalle()
})

Then('El sistema mostrara el detalle del producto',async function (this: IWorld) {

    await this.detalle.validarTituloDetalle(this.textoTitulo)
})

When('El usuario ingresa un porducto al carro', async function (this: IWorld){

    await this.inventario.agregarAlCarro()
})

Then('El sistema mostrara un producto en el carro',async function (this: IWorld) {
    

    await this.inventario.validarProductoCarro()
} )

When('Cada producto debe tener titulo precio e imagen', async function (this: IWorld) {

    await this.inventario.validarContenidoProductos()
})

When('El usuario ordena los productos de A-Z', async function (this: IWorld) {
    
    await this.inventario.ordenarAZ();
})

Then('El primer producto debe ser Sauce Labs Backpack', async function (this: IWorld) {
    
    await this.inventario.validarPrimeProducto('Sauce Labs Backpack')
})

When('El usuario ordena los productos de Z-A',async function (this: IWorld){
    
    await this.inventario.ordenarZA();
} )

Then('el primer producto debe ser Test.allTheThings T-Shirt Red',async function (this: IWorld){
    
    await this.inventario.validarPrimerProductoZA('Test.allTheThings() T-Shirt (Red)')

} )

When('El usuario ordena de menor a mayor', async function (this: IWorld){
    
    await this.inventario.ordenarMenoMayor()
})

Then('El primer porducto debe ser Suece Labs Onesie', async function (this: IWorld){
    
    await this.inventario.validarPrecioMenorMayor('Sauce Labs Onesie')
})

When('El usuario ordena de mayor a menor',async function (this: IWorld){
    
    await this.inventario.ordenarMayorMenor()
} )

Then('El primer producto debe ser Sauce Labs Fleece Jacket',async function (this: IWorld){
    
    await this.inventario.validarPrecioMayorMenor('Sauce Labs Fleece Jacket')
} )

When('El usuario agrega dos productos al carro', async function (this: IWorld){
    
    await this.inventario.agregarDosProductos();
})

Then('El sistema muestra 2 productos en el carro',async function (this: IWorld){
    
    await this.inventario.validarDosProductosCarro()
})

When('El usuario agrega un producto y luego lo elimina', async function (this: IWorld){
    
    await this.inventario.agregarAlCarro()
})

Then('El sistema no mostrara el producto agregado',async function (this: IWorld){
    
    await this.inventario.eliminarProductoCarro()
})

When('El usuario hace clic en la imagen',async function (this: IWorld){
    
    await this.inventario.clickImagen()
})
Then('El sistema mostrara el detalle del producto con la imagen', async function (this: IWorld){
    
    await this.inventario.ingresoDetalleImagen()
})

When('Ingresa al detalle del producto', async function (this: IWorld){
    await this.inventario.clickImagen()
})

When('seleeciona back to products', async function (this: IWorld){
    await this.inventario.volverPaginaInventario()
})

Then('El sistema volvera a la pagina de inventory', async function (this: IWorld){
    await this.inventario.validarIngresoInventary()
})

When('El usuario ingresa al carro de compra', async function (this: IWorld){
    await this.inventario.ingresoCarroCompra()
})

Then('El sistema cargara el carro de compra',async function (this: IWorld){
    await this.inventario.validarIngresoCarro()
})

When('El usuario ingresa al menu', async function (this: IWorld){
    await this.inventario.abrirMenu();
})

Then('El sistema mostrara las opciones disponibles', async function (this: IWorld){
    await this.inventario.validarOpcionesMenu();
})

When('el usuario hace clic en Logout', async function (this: IWorld){
    await this.inventario.abrirMenu();
    await this.inventario.clickLogout()
})

Then('El sistema redirige al login',async function (this: IWorld){
    await this.login.validarPaginaLogin()
})