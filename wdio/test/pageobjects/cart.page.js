class CartPage {
    get btnCheckOut() {
        return $('.checkout_button');
    }
    async checkout () {
        await this.btnCheckOut.click();
    }
}

export default new CartPage();