import { expect, Locator, Page } from "@playwright/test";

export class inventoryPage {
    
    private readonly page: Page;
    private readonly productTitulo : Locator;
    private readonly agregarButton : Locator;
    private readonly carroButton: Locator;
    private readonly iventroryPage: Locator;
    private readonly productos: Locator;
    private readonly tituloProducto: Locator;
    private readonly carroCompra: Locator;
    private readonly btnAgregarCarro: Locator;
    private readonly selectFiltros: Locator;
    private readonly btnAgregarBackpack: Locator;
    private readonly btnAgregarBikeLight: Locator;
    private readonly btnRemove: Locator;
    private readonly imagenInventario: Locator;  
    private readonly imagenDetalle: Locator;   
    private readonly btnBackProducts: Locator;
    private readonly titleInventary: Locator;
    private readonly tituloCarro: Locator;
    private readonly btnCarroCompra: Locator;
    private readonly btnMenu: Locator;
    private readonly menuAllItems: Locator;
    private readonly menuAbout: Locator;
    private readonly menuLogout: Locator;
    private readonly menuResetApp: Locator;
    private readonly descripcionTexr: Locator;
    private readonly precioText: Locator;
    private readonly agregarSauceLabsOnesie: Locator;


    constructor(page: Page){
        this.page = page;
        this.productTitulo = page.locator('#inventory_filter_container > div');
        this.agregarButton = page.locator('#inventory_container > div > div:nth-child(1) > div.pricebar > button');
        this.carroButton = page.locator('#shopping_cart_container > a > svg');
        this.iventroryPage = page.getByText('Swag Labs');
        this.productos = page.locator('.inventory_item');
        this.tituloProducto = page.locator('.inventory_item_name');
        this.carroCompra = page.locator('.shopping_cart_badge');
        this.btnAgregarCarro = page.locator('#add-to-cart-sauce-labs-backpack')
        this.selectFiltros = page.locator('.product_sort_container')
        this.btnAgregarBackpack = page.locator('#add-to-cart-sauce-labs-backpack');
        this.btnAgregarBikeLight = page.locator('#add-to-cart-sauce-labs-bike-light');
        this.btnRemove = page.locator('#remove-sauce-labs-backpack');
        this.imagenDetalle = page.locator('#inventory_item_container > div > div > div.inventory_details_img_container > img');
        this.imagenInventario = page.locator('.inventory_item img');
        this.imagenDetalle = page.locator('#inventory_item_container > div > div > div.inventory_details_img_container > img');
        this.btnBackProducts = page.locator('#back-to-products');
        this.titleInventary = page.locator('#header_container > div.header_secondary_container > span');
        this.tituloCarro = page.locator('#header_container > div.header_secondary_container > span');
        this.btnCarroCompra = page.locator('.shopping_cart_link');
        this.btnMenu = page.locator('#react-burger-menu-btn');
        this.menuAllItems = page.locator('#inventory_sidebar_link');
        this.menuAbout = page.locator('#about_sidebar_link');
        this.menuLogout = page.locator('#logout_sidebar_link');
        this.menuResetApp = page.locator('#reset_sidebar_link');
        this.descripcionTexr = page.locator('.inventory_item_desc');
        this.precioText = page.locator('.inventory_item_price');
        this. agregarSauceLabsOnesie = page.locator('#add-to-cart-sauce-labs-onesie')
    }

    async agregarSauceLabsBackpack(){
        await this.productTitulo.click();
        await this.agregarButton.click();
    }

    async visualizarCarroCompra(){
        await expect(this.carroButton).toBeVisible();
        await this.carroButton.click();
    }

    async ingresoInventaru(){
        await expect(this.iventroryPage).toBeVisible();
    }

    async validarCantidadProductos(){
        await expect(this.productos).toHaveCount(6);
    }

    async validarCantidadProductosTitulos(){
        await expect(this.tituloProducto).toHaveCount(6);
    }

    async validarCantidadProductosDescripcion(){
        await expect(this.descripcionTexr).toHaveCount(6);
    }

    async validarCantidadProductosPrecio(){
        await expect(this.precioText).toHaveCount(6);
    }

    async validarCantidadProductoImagen(){
        const imagenes = this.imagenInventario;
        const cantidad = await imagenes.count();

        for(let i = 0; i < cantidad; i++){
            const src = await imagenes.nth(i).getAttribute('src');
            expect(src).not.toBeNull();
            expect(src).not.toBe('');
        }
    }

    async validarProductoConPrecio(nombre: string, precio: string){
        const producto = this.page.locator('.inventory_item').filter({
            has: this.page.locator('.inventory_item_name', {hasText: nombre})
        });

        await expect(producto.locator('.inventory_item_name')).toHaveText(nombre);
        await expect(producto.locator('.inventory_item_price')).toHaveText(precio);
    }

    async clickAddToCart(nombreProducto: string){
        const producto = this.page.locator('.inventory_item').filter({
        has: this.page.locator('.inventory_item_name', { hasText: nombreProducto })
    });
        await producto.locator('.btn_inventory').click();
    }

    async validarBtnCambiaARemove(nombreProducto: string){
        const producto = this.page.locator('.inventory_item').filter({
        has: this.page.locator('.inventory_item_name', { hasText: nombreProducto })
    });
        await expect(producto.locator('.btn_inventory')).toHaveText('Remove');
    }

    async validarBadgeCarro(cantidad: string){
        await expect(this.page.locator('.shopping_cart_badge')).toHaveText(cantidad);
    }

    async validarBotonesAddToCart(){
        const botones = this.page.locator('.btn_inventory');
        await expect(botones).toHaveCount(6);
    }

    async ingresoDetalle() {
        const titulo = this.tituloProducto.first()
        const textoTItulo = await titulo.innerText()

        await titulo.click();
        return textoTItulo;
    }

    async agregarAlCarro(){
        await this.btnAgregarCarro.click()
    }

    async validarProductoCarro(){
        await expect(this.carroCompra).toHaveText('1');
    }

    async validarCarroEnCero(){
        await expect(this.carroCompra).not.toBeVisible();
    }

    async validarContenidoProductos(){
    const cantidad = await this.productos.count()

    for(let i = 0; i < cantidad; i++){
        const producto = this.productos.nth(i);

        await expect(producto.locator('.inventory_item_name')).toBeVisible()
        await expect(producto.locator('.inventory_item_price')).toBeVisible()
        await expect(producto.locator('img.inventory_item_img')).toBeVisible()
        }
    }

    async ordenarAZ(){
        await this.selectFiltros.selectOption('az')
    }

    async validarPrimeProducto(nombreEsperado: string){
        const primerTitulo = await this.tituloProducto.first().innerText();
        expect(primerTitulo).toBe(nombreEsperado)
    }

    async validarUltimoProducto(nombreEsperado: string){
        const ultimoTitulo = await this.tituloProducto.last().innerText();
        expect(ultimoTitulo).toBe(nombreEsperado);
    }

    async validarUltimoProductoPrecio(nombreEsperado: string, precio: string){
        const ultimoTitulo = await this.tituloProducto.last().innerText();
         const primerPrecio = await this.precioText.last().innerText();
        expect(ultimoTitulo).toBe(nombreEsperado);
        expect(primerPrecio).toBe(precio);
    }

    async ordenarZA(){
        await this.selectFiltros.selectOption('za')
    }

    async validarPrimerProductoZA(nombreEsperado: string){
        const primerTitulo = await this.tituloProducto.first().innerText();
        expect(primerTitulo).toBe(nombreEsperado)
    }

    async validarPrimerProductoPrecio(nombreEsperado: string, precio: string){
        const primerTitulo = await this.tituloProducto.first().innerText();
        const primerPrecio = await this.precioText.first().innerText();
        expect(primerTitulo).toBe(nombreEsperado)
        expect(primerPrecio).toBe(precio)
    }

    async ordenarMenoMayor(){
        await this.selectFiltros.selectOption('lohi')
    }

    async validarPrecioMenorMayor(nombreEsperado: string){
        const primerTitulo = await this.tituloProducto.first().innerText();
        expect(primerTitulo).toBe(nombreEsperado)
    }

    async ordenarMayorMenor(){
        await this.selectFiltros.selectOption('hilo');
        await expect(this.tituloProducto.first()).toHaveText('Sauce Labs Fleece Jacket');
    }

    async validarPrecioMayorMenor(nombreEsperado: string){
        const primerTitulo = await this.tituloProducto.first().innerText();
        expect(primerTitulo).toBe(nombreEsperado)
        
    }

   async agregarDosProductos(){
        await this.btnAgregarBackpack.click();
        await this.btnAgregarBikeLight.click();
    }

    async validarDosProductosCarro(){
        await expect(this.carroCompra).toHaveText('2');
    }

    async eliminarProductoCarro(){
        await this.btnRemove.click()
        await expect(this.carroCompra).not.toBeVisible()
    }

    async clickImagen(){
        await this.imagenInventario.click();
    }

    async ingresoDetalleImagen(){
        await expect(this.imagenDetalle).toBeVisible();
    }

    async volverPaginaInventario(){
        await this.btnBackProducts.click()
    }

    async validarIngresoInventary(){
        await expect(this.titleInventary).toBeVisible()
    }

    async ingresoCarroCompra(){
        await this.btnCarroCompra.click()
    }

    async validarIngresoCarro(){
        await expect(this.tituloCarro).toBeVisible()
    }

    async abrirMenu(){
        await this.btnMenu.click();
    }

    async validarOpcionesMenu(){
        await expect(this.menuAllItems).toBeVisible();
        await expect(this.menuAbout).toBeVisible();
        await expect(this.menuLogout).toBeVisible();
        await expect(this.menuResetApp).toBeVisible();
    }

    async clickLogout(){
        await this.menuLogout.click()
    }

    async validarIngresoInventory(){
        await expect(this.titleInventary).toBeVisible()
    }

    async clickRemoveProducto(nombreProducto: string){
    const producto = this.page.locator('.inventory_item').filter({
        has: this.page.locator('.inventory_item_name', { hasText: nombreProducto })
    });
        await producto.locator('.btn_secondary').click();
    }


    async agregarOtroProducto(){
        await this.agregarSauceLabsOnesie.click();
    }
}