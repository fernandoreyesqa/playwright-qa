import { Before, After, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from '@playwright/test';
import { LoginPage} from 'pageobjesct/loginPage';
import { inventoryPage } from 'pageobjesct/inventoryPage';
import { detallPage } from 'pageobjesct/detalle';
import { cartPage } from 'pageobjesct/cartPage';
import { checkoutPage } from 'pageobjesct/checkoutPage';


let browser: Browser;

BeforeAll({ timeout: 70000 }, async () => {
    browser = await chromium.launch({ headless: true });
});

AfterAll(async () => {
    await browser.close();
});

Before({ timeout: 70000 }, async function () {
    const context: BrowserContext = await browser.newContext();
    const page: Page = await context.newPage();
    page.setDefaultTimeout(30000);
    this.context = context;
    this.page = page;
    this.login = new LoginPage(page);
    this.inventario = new inventoryPage(page);
    this.detalle = new detallPage(page);
    this.carro = new cartPage(page);
    this.checkout = new checkoutPage(page);
});

After(async function () {
    await this.page?.close();
    await this.context?.close();
});