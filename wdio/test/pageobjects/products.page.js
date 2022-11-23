class ProductsPage {
    get btnBurger () {
        return $('#react-burger-menu-btn');
    }
    get linkLogout () {
        return $('#logout_sidebar_link');
    }
    get linkReset () {
        return $('#reset_sidebar_link');
    }
    get btnCloseBurger () {
        return $('#react-burger-cross-btn');
    }
    async logout () {
        await this.btnBurger.click();
        await browser.pause(1000);
        await this.linkLogout.click();
    }
    async reset () {
        await this.btnBurger.click();
        await browser.pause(1000);
        await this.linkReset.click();
        await browser.pause(1000);
        await this.btnCloseBurger.click();
    }
}

export default new ProductsPage();
