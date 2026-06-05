import { expect, Locator, Page } from "@playwright/test";
import { ENV_CONFIG } from "../config/env.config";

export class cartPage{

    private readonly checkoutButton: Locator;
    private readonly btnReomve: Locator;
    private readonly carroCompra: Locator;
    private readonly nombreProducto: Locator;
    private readonly tituloDetalle: Locator;
    private readonly btnContinueShoping: Locator;
    private readonly btnCheckout: Locator;
    

    constructor(page: Page){
        this.checkoutButton = page.locator('.btn_action.checkout_button');
        this.btnReomve = page.locator('.cart_button');
        this.carroCompra = page.locator('.shopping_cart_badge');
        this.nombreProducto = page.locator('.inventory_item_name').first();
        this.tituloDetalle = page.locator('.inventory_details_name');
        this.btnContinueShoping = page.locator('#continue-shopping');
        this.btnCheckout = page.locator('#checkout')
        
    }

    async irCheckout(){
        await this.checkoutButton.click()
    }

    async clickReomve(){
        await this.btnReomve.click()
    }

    async validarProductoEliminado(){
        await expect(this.btnReomve).not.toBeVisible()
    }

    async validarElCarroVacio(){
        await expect(this.carroCompra).not.toBeVisible();
    }
    async clickNombreProducto(){
        const texto = await this.nombreProducto.innerText();
        await this.nombreProducto.click();
        return texto;
    }

    async validarDetalleProducto(textoEsperado: string){
        await expect(this.tituloDetalle).toHaveText(textoEsperado);
    }

    async clickContinueShoping(){
        await this.btnContinueShoping.click()
    }

    async ingresoCheckou(){
        await this.btnCheckout.click()

    }
}