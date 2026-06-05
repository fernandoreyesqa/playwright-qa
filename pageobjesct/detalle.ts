import { expect, Locator, Page } from "@playwright/test";

export class detallPage {

    private readonly tituloDetalle: Locator;

    constructor(page: Page){
        this.tituloDetalle = page.locator('.inventory_details_name')
    }

    async validarTituloDetalle(textoEsperado: string){
        await expect(this.tituloDetalle).toHaveText(textoEsperado)
    }

}