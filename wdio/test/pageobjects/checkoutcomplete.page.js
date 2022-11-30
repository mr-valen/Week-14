class CheckoutCompletePage {
    get btnBackHome () {
        return $('#back-to-products')
    }
    async backHome () {
        await this.btnBackHome.click();
    }
}
export default new CheckoutCompletePage();