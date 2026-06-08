import { Locator, Page, expect } from "@playwright/test";
import { ENV_CONFIG } from "../config/env.config";

export class LoginPage { // Recomendado: Empezar con Mayúscula
    private readonly page: Page;
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    private readonly mensajeError: Locator;
    private readonly errorMensaje: Locator;
    private readonly textoError: Locator;
    private readonly iconoError: Locator;
    private readonly clicX: Locator;


    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        // Un selector más corto suele ser más estable
        this.mensajeError = page.locator('[data-test="error"]'); 
        this.errorMensaje = page.locator('#login_button_container > div > form > div.error-message-container.error > h3')
        this.textoError = page.locator('[data-test="error"]');
        this.iconoError = page.locator('.error_icon');
        this.clicX = page.locator('#login_button_container > div > form > div.error-message-container.error > h3 > button > svg > path')
    }

    async navegar() {
        await this.page.goto(ENV_CONFIG.url);
    }

    async loginErroneo() {
        await this.usernameInput.fill(ENV_CONFIG.user);
        await this.loginButton.click();
    }

    async validarMensajeVisible() {
        // toBeVisible es mejor que toBeAttached porque confirma que el usuario lo ve
        await expect(this.mensajeError).toBeVisible({ timeout: 5000 });
    }

    async loginPositivo(){
        await this.usernameInput.fill(ENV_CONFIG.user);
        await this.passwordInput.fill(ENV_CONFIG.pass);
        await this.loginButton.click()
        await this.page.screenshot({ path: 'evidencia/login.png' });
    }

    async ingresoPassword(){
        await this.passwordInput.fill(ENV_CONFIG.pass);
        await this.loginButton.click()
    }
    //Solo hace clic en el boton login
    async sinUsuarios() {
        await this.loginButton.click()
    }

    async ingresoUsuarioErroneo(){
        await this.usernameInput.fill('Prueba');
        await this.passwordInput.fill(ENV_CONFIG.pass);
        await this.loginButton.click()
    }

    async loginVisible(){
        await expect(this.loginButton).toBeVisible()
    }

    async mesajeError(){
        await expect(this.errorMensaje).toBeVisible();
    }

    async validarPaginaLogin(){
        await expect(this.usernameInput).toBeVisible()
    }

    async ingresoUsuario(){
        await this.usernameInput.fill(ENV_CONFIG.user);
    }

    async ingresoContraseña(){
        await this.passwordInput.fill(ENV_CONFIG.pass);
    }

    async loginCargado(){
        await expect(this.usernameInput).toBeVisible()
        await expect(this.passwordInput).toBeVisible()
        await expect(this.loginButton).toBeVisible()
    }

    async clickButon(){
        await this.loginButton.click()
    }

    async verificarUrlInventario(){
        await expect(this.page).toHaveURL(/.*inventory.html/);
    }

    async ingresarUsuario(usuario: string){
        await this.usernameInput.fill(usuario);
    }

    async validarIngresoInventary(){
        await expect(this.page.locator('.title')).toHaveText('Products');
    }

    async validarImagenProductos(){
        const imagenes = this.page.locator('.inventory_item img');
        const cantidad = await imagenes.count();
        const srcs: string[] = [];

        for(let i = 0; i < cantidad; i++){
            const src = await imagenes.nth(i).getAttribute('src');
            srcs.push(src!);
        }

        const srcUnicos = new Set(srcs);
        expect(srcUnicos.size).toBe(1); // todas iguales = anomalía
    }

    async medirTiempoCarga(){
        const inicio = Date.now();
        await this.page.waitForURL(/.*inventory.html/);
        const fin = Date.now();
        return fin - inicio;
    }

    async validarMesajeErro(mensaje: string){
        await expect(this.textoError).toHaveText(mensaje);
    }

    async validarIconoError(){
        await expect(this.iconoError.first()).toBeVisible()
    }

    async validarPermaneciaLogin(){
        await expect(this.page).toHaveURL(/.*saucedemo.com\/$/);
    }

    async usuarioVacio(){
        await expect(this.usernameInput).toBeVisible()
    }

    async passVacio(){
        await expect(this.passwordInput).toBeVisible()
    }

    async passString(pass: string){
        await this.passwordInput.fill(pass)
    }

    async usuarioString(usuario: string){
        await this.usernameInput.fill(usuario)
    }

    async clickX(){
        await this.clicX.click()
    }

    async desapareceMensaje(){
        await expect(this.textoError).not.toBeVisible();
    }

    async desapareceIcono(){
        await expect(this.iconoError).not.toBeVisible();
    }

    async navegarUrl(url: string){
        await this.page.goto(url);
    }

    async navegarLogin(){
        await expect(this.page).toHaveURL(/.*saucedemo.com\/$/);
    }

    async mensajeNavegador(mensaje: string){
        await expect(this.page.locator('[data-test="error"]')).toHaveText(mensaje)
    }
    async ingresarTextoPassword(){
    await this.passwordInput.fill('cualquier_texto');
    }

    async validarTipoPassword(){
        const tipo = await this.passwordInput.getAttribute('type');
        expect(tipo).toBe('password');
    }

    async validarValorNoVisible(){
        const valor = await this.passwordInput.inputValue();
        expect(valor).not.toBe('');
        // el campo tiene valor pero está enmascarado por el tipo password
    }
    
}