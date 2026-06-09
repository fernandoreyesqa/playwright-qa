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
    private readonly cartItem: Locator;
    private readonly btnMenu: Locator;
    private readonly menuAllItems: Locator;
    private readonly menuAbout: Locator;
    private readonly menuLogout: Locator;
    private readonly menuReset: Locator;
    

    constructor(page: Page){
        this.checkoutButton = page.locator('.btn_action.checkout_button');
        this.btnReomve = page.locator('.cart_button');
        this.carroCompra = page.locator('.shopping_cart_badge');
        this.nombreProducto = page.locator('.inventory_item_name').first();
        this.tituloDetalle = page.locator('.inventory_item_name');
        this.btnContinueShoping = page.locator('#continue-shopping');
        this.btnCheckout = page.locator('#checkout')
        this.cartItem = page.locator('.cart_item');
        this.btnMenu = page.locator('#react-burger-menu-btn');
        this.menuAllItems = page.locator('#inventory_sidebar_link');
        this.menuAbout = page.locator('#about_sidebar_link');
        this.menuLogout = page.locator('#logout_sidebar_link');
        this.menuReset = page.locator('#reset_sidebar_link');
    }

    async clicAllItems(){
        await this.menuAllItems.click();
    }

    async clicLogout(){
        await this.menuLogout.click();
    }

    async visualizarMenu(){
        await expect(this.menuAllItems.first()).toBeVisible();
        await expect(this.menuAbout.first()).toBeVisible();
        await expect(this.menuLogout.first()).toBeVisible();
        await expect(this.menuReset.first()).toBeVisible();
    }

    async clicMenu(){
        await this.btnMenu.click();
    }

    async productoEnCarro(){
        await expect(this.cartItem.first()).toBeVisible();
    }

    async irCheckout(){
        await this.checkoutButton.click();
    }

    async clickReomve(){
        await this.btnReomve.click();
    }

    async clickReomveConDosProdcutos(){
        await (this.btnReomve.first()).click();
    }

    async visualizarRemove(){
        await expect(this.btnReomve).toBeVisible();
    }

    async clickReomveNoVisible(){
        await expect(this.btnReomve).not.toBeVisible();
    }

    async validarProductoEliminado(){
        await expect(this.btnReomve).not.toBeVisible();
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
        await this.btnContinueShoping.click();
    }

    async ingresoCheckou(){
        await this.btnCheckout.click();

    }

    async clicTitulo(){
        await this.tituloDetalle.click();
    }
}