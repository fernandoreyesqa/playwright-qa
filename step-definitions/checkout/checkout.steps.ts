import { Given, When, Then, IWorld } from '@cucumber/cucumber';

Given('que el usuario hace clic en el boton checkout', async function(this:IWorld){
    await this.checkout.clickCheckout();
})

When('el usuario ingresa {string} en el input de first name', async function(this: IWorld, first: string){
    await this.checkout.ingresoFirstName(first);
})

When('hace clic en el boton continuar', async function(this: IWorld){
    await this.checkout.clickContinuar();
})

Then('el sistema mostrara mensaje de error de campos faltantes', async function(this: IWorld){
    await this.checkout.mensajeError();
})

When('el usuario ingresa {string} en el input de last name', async function(this: IWorld, last: string){
    await this.checkout.ingresoLastNem(last);
})

When('el usuario ingresa {string} en el input zip codigo postal', async function(this:IWorld, code: string){
    await this.checkout.ingresoPostalCode(code);
})

When('el usuario hace clic en el menu', async function(this: IWorld){
    await this.checkout.ingresoMenu();
})

Then('el sistema mostrara las opciones all items, about, logout y reset app store', async function(this: IWorld){
    await this.checkout.validarMenu();
})

When('el usuario hace clic en la opcion all items', async function(this: IWorld){
    await this.checkout.clicAllItems();
})

When('el usuario hace clic en la opcion about', async function(this: IWorld){
    await this.checkout.clickAbout();
})

When('el usuario hace clic en la opcion logout', async function(this: IWorld){
    await this.checkout.clickLogout();
})

When('el usuario hace clic en el boton cancelar', async function(this: IWorld){
    await this.checkout.clicCancelar();
})

When('el usuario hace clic en el titulo del producto del checkout', async function(this: IWorld){
    await this.checkout.clickTitulo();
})

When('hace click en el boton finish', async function(this: IWorld){
    await this.checkout.clicFinish();
})