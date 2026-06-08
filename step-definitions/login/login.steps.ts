import { Given, When, Then, IWorld } from '@cucumber/cucumber';
import { LoginPage } from 'pageobjesct/loginPage';
import { inventoryPage } from 'pageobjesct/inventoryPage';
import { expect } from '@playwright/test';

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

    await loging.loginErroneo();
})

Then('El sistema mostrara un mensaje indicando error',async function (this: IWorld) {
    const loging = new LoginPage(this.page);

    await loging.validarMensajeVisible();
})

When('El usuario ingresa solo la contraseña',async function (this: IWorld) {
    const loging = new LoginPage(this.page);

    await loging.ingresoPassword();
})

When('El usuario no ingresa el usuario y contraseña', async function (this: IWorld) {
    const loging = new LoginPage(this.page);

    await loging.sinUsuarios();
})

When('El usuario ingresa un usuario que no corresponde', async function (this: IWorld) {
    const loging = new LoginPage(this.page);

    await loging.ingresoUsuarioErroneo();
})

Then('El sistema indica error de usuario', async function (this: IWorld) {
    const loging = new LoginPage(this.page);

    await loging.mesajeError();
})

Given('que el usuario navega a saucedemo', async function(this: IWorld) {
    const loging = new LoginPage(this.page);

    await loging.navegar();
})

When('la página de login está completamente cargada', async function(this: IWorld){
    const loging = new LoginPage(this.page);

    await loging.loginCargado();
})

When('que el usuario ingresa el nombre de usuario standard_user', async function(this: IWorld) {
    const loging = new LoginPage(this.page);

    await loging.ingresoUsuario();
})

When('el usuario ingresa la contraseña', async function(this: IWorld){
    const loging = new LoginPage(this.page);

    await loging.ingresoContraseña();
})

When('el usuario hace clic en el botón Login',  { timeout: 30000 }, async function(this: IWorld){
    const loging = new LoginPage(this.page);
    this.tiempoInicio = Date.now();
    await loging.clickButon()
})

Then('el sistema redirige al usuario a {string}', async function(this: IWorld, _url: string){
    await this.login.verificarUrlInventario();
})

Given('que el usuario ingresa el nombre de usuario {string}', async function(this: IWorld, usuario: string){
    await this.login.ingresarUsuario(usuario);
})

When('la página carga el inventario de productos', async function(this: IWorld){
    await this.login.validarIngresoInventary();
})

When('todas las imágenes de productos apuntan al mismo src', async function(this: IWorld){
    await this.login.validarImagenProductos()
})

Then('el tiempo de carga es mayor a 3 segundos', async function(this: IWorld){
    await this.page.waitForURL(/.*inventory.html/);
    const tiempoCarga = Date.now() - this.tiempoInicio;
    expect(tiempoCarga).toBeGreaterThan(3000);
})

Then('el sistema muestra el mensaje de error {string}', async function(this: IWorld, mensaje: string){
    await this.login.validarMesajeErro(mensaje);
})

Then('el ícono de error es visible en los campos de usuario y contraseña', async function(this: IWorld){
    await this.login.validarIconoError();
})

Then('el usuario permanece en la página de login', async function(this: IWorld){
    await this.login.validarPermaneciaLogin();
})

Given('que el campo de usuario está vacío', async function(this: IWorld){
    await this.login.usuarioVacio();
})

When('el campo de contraseña está vacío', async function(this: IWorld){
     await this.login.passVacio();
})

When('el usuario ingresa la contraseña {string}', async function(this: IWorld, pass: string){
    await this.login.passString(pass);
})

When('el usuario hace clic en el botón X del mensaje de error', async function (this:IWorld)  {
    await this.login.clickX();
})

Then('el mensaje de error desaparece de la pantalla', async function(this: IWorld){
    await this.login.desapareceMensaje();
})

When('los íconos de error en los campos de usuario y contraseña desaparecen', async function(this: IWorld){
    await this.login.desapareceIcono();
})

Given('que el usuario no ha iniciado sesión', async function (this: IWorld){
    await this.login.usuarioVacio();
})

When('el usuario navega directamente a {string}', async function(this: IWorld, url: string){
    await this.login.navegarUrl(url);
})

Then('el sistema redirige al usuario a la página de login', async function (this:IWorld) {
    await this.login.navegarLogin();
})

Then('se muestra el mensaje {string}', async function(this: IWorld,mensaje: string ){
    await this.login.mensajeNavegador(mensaje);
})

When('el usuario ingresa texto en el campo de contraseña', async function(this: IWorld){
    await this.login.ingresarTextoPassword();
})

Then('el campo de contraseña es de tipo password', async function(this: IWorld){
    await this.login.validarTipoPassword();
})

Then('el valor real no es visible en pantalla', async function(this: IWorld){
    await this.login.validarValorNoVisible();
})