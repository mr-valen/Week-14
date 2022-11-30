class CheckoutTwoPage {
    get itemPrice () {
        return $('.inventory_item_price')
    }
    get subtotal () {
        return $('.summary_subtotal_label')
    }
    get btnFinish () {
        return $('#finish')
    }
    async finish () {
        this.btnFinish.click();
    }
}
export default new CheckoutTwoPage();