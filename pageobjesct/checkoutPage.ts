import { expect, Locator, Page } from "@playwright/test";
import { ENV_CONFIG } from "config/env.config";

export class checkoutPage {
      //checkout relleno de infformacion
    private readonly nombreInput: Locator;
    private readonly apellidoInput: Locator;
    private readonly postalInput: Locator;
    private readonly continueButton: Locator;
    private readonly textError: Locator;
    //checkout producto
    private readonly checkoutOverview: Locator;
    private readonly buttonFinish: Locator;
    //checkout complete
    private readonly titleFinish: Locator;
    private readonly logoSauceLabs: Locator;
    private readonly titleCheckou: Locator;

    constructor(page: Page){
        //checkout relleno de infformacion
        this.nombreInput = page.locator('#first-name')
        this.apellidoInput = page.locator('#last-name')
        this.postalInput = page.locator('#postal-code')
        this.continueButton =  page.locator('#continue')
        this.textError = page.locator('#checkout_info_container > div > form > div.checkout_info > div.error-message-container.error > h3')
        //checkout producto
        this.checkoutOverview = page.locator('#contents_wrapper > div.subheader')
        this.buttonFinish = page.locator('.btn_action.cart_button')
        //checkout complete
        this.titleFinish = page.locator('.subheader')
        this.logoSauceLabs = page.locator('.pony_express');
        this.titleCheckou = page.locator('#header_container > div.header_secondary_container > span')
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