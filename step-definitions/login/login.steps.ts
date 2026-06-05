import { Given, When, Then, IWorld } from '@cucumber/cucumber';
import { LoginPage } from 'pageobjesct/loginPage';
import { inventoryPage } from 'pageobjesct/inventoryPage';

Given('Que el usuario navege por el Login', async function (this: IWorld) {
    const loging = new LoginPage(this.page);
    await loging.navegar();
})

When('El usuario ingresa su usuario y contraseña', async function (this: IWorld) {
    const loging = new LoginPage(this.page);
    await loging.loginPositivo();
})

Then('El sistema ingresar a la pagina de invetario', async function (this: IWorld) {
    const inventario = new inventoryPage(this.page);
    await inventario.ingresoInventaru();
})

When('El usuario ingresar solo el usuario', async function (this: IWorld) {
    const loging = new LoginPage(this.page);

    await loging.loginErroneo()
})

Then('El sistema mostrara un mensaje indicando error',async function (this: IWorld) {
    const loging = new LoginPage(this.page);

    await loging.validarMensajeVisible()
})

When('El usuario ingresa solo la contraseña',async function (this: IWorld) {
    const loging = new LoginPage(this.page);

    await loging.ingresoPassword()
})

When('El usuario no ingresa el usuario y contraseña', async function (this: IWorld) {
    const loging = new LoginPage(this.page);

    await loging.sinUsuarios()
})

When('El usuario ingresa un usuario que no corresponde', async function (this: IWorld) {
    const loging = new LoginPage(this.page);

    await loging.ingresoUsuarioErroneo()
})

Then('El sistema indica error de usuario', async function (this: IWorld) {
    const loging = new LoginPage(this.page);

    await loging.mesajeError();
})