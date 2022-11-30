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
    get invList () {
        return $('.inventory_list');
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
    get btnAddToCart () {
        return $('.btn_inventory');
    }
    get btnCartLink () {
        return $('.shopping_cart_link');
    }
    async addToCart () {
        await this.btnAddToCart.click();
    }
    async goToCart() {
        await this.btnCartLink.click();
    }
    get btnFilter () {
        return $('.product_sort_container');
    }
    get optFilterZA () {
        return $('//*[@id="header_container"]/div[2]/div[2]/span/select/option[2]');
    }
    get optFilterLohi () {
        return $('//*[@id="header_container"]/div[2]/div[2]/span/select/option[3]');
    }
    get optFilterHilo () {
        return $('//*[@id="header_container"]/div[2]/div[2]/span/select/option[4]');
    }
    async filterZA () {
        await this.btnFilter.click();
        await this.optFilterZA.click();
    }
    async filterLohi () {
        await this.btnFilter.click();
        await this.optFilterLohi.click();
    }
    async filterHilo () {
        await this.btnFilter.click();
        await this.optFilterHilo.click();
    }
    get twitterSocial () {
        return $('.social_twitter');
    }
    get facebookSocial () {
        return $('.social_facebook');
    }
    get linkedinSocial () {
        return $('.social_linkedin');
    }
    async goTwitter () { 
        await this.twitterSocial.click();
        await browser.switchWindow('twitter')
    }
    async goFacebook () { 
        await this.facebookSocial.click();
        await browser.switchWindow('facebook')
    }
    async goLinkedin () { 
        await this.linkedinSocial.click();
        await browser.switchWindow('linkedin')
    }
}

export default new ProductsPage();
