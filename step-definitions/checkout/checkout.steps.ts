import { Given, When, Then, IWorld } from '@cucumber/cucumber';

When('El usuario no rellena la informacion y hace clic en el boton continuar',async function (this: IWorld){
    await this.checkout.clickContinuar()
})

Then('El sistema mostrara un mensaje de error',async function (this: IWorld){
    await this.checkout.validarMensajeError()
})

When('El usuario solo rellena el first name y hace clic en el boton continuar',async function (this: IWorld){
    await this.checkout.ingresoSoloFirstName()
    await this.checkout.clickContinuar()
})

When('Se ingresa solo el first name y last name y se hace clic en continuar',async function (this: IWorld) {
    await this.checkout.ingresoFirstNameLastName()
    await this.checkout.clickContinuar()
})

