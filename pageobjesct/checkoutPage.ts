import { expect, Locator, Page } from "@playwright/test";
import { ENV_CONFIG } from "config/env.config";

export class checkoutPage {
      //checkout relleno de infformacion
    private readonly nombreInput: Locator;
    private readonly apellidoInput: Locator;
    private readonly postalInput: Locator;
    private readonly continueButton: Locator;
    //checkout producto
    private readonly checkoutOverview: Locator;
    private readonly buttonFinish: Locator;
    //checkout complete
    private readonly titleFinish: Locator;
    private readonly logoSauceLabs: Locator;
    private readonly titleCheckou: Locator;
    private readonly btnCheckout: Locator;
    private readonly textError: Locator;
    //menu
    private readonly menu: Locator;
    private readonly menuAllItems: Locator;
    private readonly menuAbout: Locator;
    private readonly menuLogout: Locator;
    private readonly menuReset: Locator;
    private readonly btnCancelar: Locator;
    private readonly tituloProducto: Locator;
    private readonly btnFinish: Locator;

    constructor(page: Page){
        //checkout relleno de infformacion
        this.nombreInput = page.locator('#first-name');
        this.apellidoInput = page.locator('#last-name');
        this.postalInput = page.locator('#postal-code');
        this.continueButton =  page.locator('#continue');
        this.btnCancelar = page.locator('#cancel');
        //checkout producto
        this.checkoutOverview = page.locator('#contents_wrapper > div.subheader');
        this.buttonFinish = page.locator('.btn_action.cart_button');
        //checkout complete
        this.titleFinish = page.locator('.subheader');
        this.logoSauceLabs = page.locator('.pony_express');
        this.titleCheckou = page.locator('#header_container > div.header_secondary_container > span');
        this.btnCheckout = page.locator('#checkout')
        //mensaje de error
        this.textError = page.locator('.error-button');
        //menu
        this.menu = page.locator('#react-burger-menu-btn');
        this.menuAllItems = page.locator('#inventory_sidebar_link');
        this.menuAbout = page.locator('#about_sidebar_link');
        this.menuLogout = page.locator('#logout_sidebar_link');
        this.menuReset = page.locator('#reset_sidebar_link');
        this.tituloProducto = page.locator('.inventory_item_name');
        this.btnFinish = page.locator('#finish');
    }

    async clicFinish(){
        await this.btnFinish.click();
    }

    async clickTitulo(){
        await this.tituloProducto.click();
    }

    async clicCancelar(){
        await this.btnCancelar.click()
    }

    async ingresoMenu(){
        await this.menu.click();
    }

    async clickLogout(){
        await this.menuLogout.click();
    }

    async clickAbout(){
        await this.menuAbout.click();
    }

    async clicAllItems(){
        await this.menuAllItems.click();
    }

    async validarMenu(){
        await expect(this.menu).toBeVisible();
        await expect(this.menuAbout).toBeVisible();
        await expect(this.menuLogout).toBeVisible();
        await expect(this.menuReset).toBeVisible();
    }

    async clickCheckout(){
        await this.btnCheckout.click();
    }

    async ingresoFirstName(nombre: string){
        await this.nombreInput.fill(nombre)
    }

    async ingresoLastNem(nombre: string){
        await this.apellidoInput.fill(nombre)
    }

    async ingresoPostalCode(nombre: string){
        await this.postalInput.fill(nombre)
    }

    async mensajeError(){
        await expect(this.textError).toBeVisible()
    }

    async rellenarInformacion(){

        await expect(this.nombreInput).toBeVisible()

        await this.nombreInput.fill('Prueba')
        await this.apellidoInput.fill('QA')
        await this.postalInput.fill('123456')
        await this.continueButton.click()
    }

    async checkoutProducto(){

        await expect(this.checkoutOverview).toBeVisible()

        await this.buttonFinish.click()
    }

    async checkoutComplete(){
        await expect(this.titleFinish).toBeVisible()
        await expect(this.logoSauceLabs).toBeVisible()
    }

    async validarIngresoCheckout(){
        await expect(this.titleCheckou).toBeVisible()
    }

    async clickContinuar(){
        await this.continueButton.click()
    }

    async validarMensajeError(){
        await expect(this.textError).toBeVisible()
    }

    async ingresoSoloFirstName(){
         await this.nombreInput.fill(ENV_CONFIG.firstName)
    }

    async ingresoFirstNameLastName(){
        await this.nombreInput.fill(ENV_CONFIG.firstName)
        await this.apellidoInput.fill(ENV_CONFIG.lastName)
    }
}