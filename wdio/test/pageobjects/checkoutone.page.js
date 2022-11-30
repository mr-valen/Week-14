class CheckoutOnePage {
    get inputFirstName () {
        return $('#first-name');
    }
    get inputLastName () {
        return $('#last-name');
    }
    get inputPostalCode () {
        return $('#postal-code');
    }
    get btnContinue () {
        return $('#continue')
    }
    async checkoutOK () {
        this.inputFirstName.setValue('ValidName');
        this.inputLastName.setValue('ValidLastName');
        this.inputPostalCode.setValue('12345');
        await browser.pause(2000);
        this.btnContinue.click();
    }
}
export default new CheckoutOnePage();