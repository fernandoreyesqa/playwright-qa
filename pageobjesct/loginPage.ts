import { Locator, Page, expect } from "@playwright/test";
import { ENV_CONFIG } from "../config/env.config";

export class LoginPage { // Recomendado: Empezar con Mayúscula
    private readonly page: Page;
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    private readonly mensajeError: Locator;
    private readonly errorMensaje: Locator

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        // Un selector más corto suele ser más estable
        this.mensajeError = page.locator('[data-test="error"]'); 
        this.errorMensaje = page.locator('#login_button_container > div > form > div.error-message-container.error > h3')
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

    async mesajeError(){
        await expect(this.errorMensaje).toBeVisible();
    }

    async validarPaginaLogin(){
        await expect(this.usernameInput).toBeVisible()
    }
}