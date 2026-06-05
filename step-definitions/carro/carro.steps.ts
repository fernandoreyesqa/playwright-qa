import { Given, When, Then, IWorld } from '@cucumber/cucumber';

When('El usuario agrega un producto al carro', async function (this: IWorld){
    await this.inventario.agregarAlCarro();
})

When('El usuario hace clic en el boton del carrito', async function (this: IWorld){
    await this.inventario.ingresoCarroCompra();
})

When('elimina el prodcuto desde el carro', async function (this: IWorld){
    await this.carro.clickReomve();
})

Then('El sistema eliminar el producto', async function (this: IWorld){
    await this.carro.validarProductoEliminado();
})

Then('El sistema eliminara del icono del carro el prodcuto', async function (this: IWorld){
    await this.carro.validarElCarroVacio();
})

When('El usuario hace clic en el nombre del producto en el carrito', async function (this: IWorld){
    this.textoTitulo = await this.carro.clickNombreProducto();
})

Then('El sistema navega al detalle del producto', async function (this: IWorld){
    await this.carro.validarDetalleProducto(this.textoTitulo);
})

When('El usuario hace clic en Continue Shopping', async function (this: IWorld){
    await this.carro.clickContinueShoping()
})

Then('El sistema regresa al inventario', async function (this: IWorld){
    await this.inventario.validarIngresoInventory()
})

When('El usuario hace clic en Checkout', async function (this: IWorld){
        await this.carro.ingresoCheckou()
})

Then('El sistema navega al formulario de checkout', async function (this: IWorld){
    await this.checkout.validarIngresoCheckout()
})

