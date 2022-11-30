import LoginPage from  '../pageobjects/login.page';
import ProductsPage from '../pageobjects/products.page';

describe('SwagLabs Products application', () => {
    beforeAll('Navigate to url and login as standard', () => {
        browser.url("https://www.saucedemo.com/");
        LoginPage.login('standard_user', 'secret_sauce');
    })
    it('should filter by alphabetical order as default', async () => {
        const list = ProductsPage.invList;
        const length = await list.$$('.inventory_item').length;
        let inventory = [];
        for (let i = 0; i < length; i++) {
            inventory.push(await list.$$('.inventory_item')[i].$('.inventory_item_name').getText())
        }
        await expect (inventory.toString()).toEqual(inventory.sort().toString());
        await browser.refresh();
    });
    it('should filter by inverse alphabetical order when selecting', async () => {
        ProductsPage.filterZA();
        await browser.pause(1000);
        const list = ProductsPage.invList;
        const length = await list.$$('.inventory_item').length;
        let inventory = [];
        for (let i = 0; i < length; i++) {
            inventory.push(await list.$$('.inventory_item')[i].$('.inventory_item_name').getText())
        }
        await expect (inventory.toString()).toEqual(inventory.sort().reverse().toString());
        await browser.refresh();
    });
    it('should filter by lower to higher price order when selecting', async () => {
        ProductsPage.filterLohi();
        await browser.pause(1000);
        const list = ProductsPage.invList;
        const length = await list.$$('.inventory_item').length;
        let inventory = [];
        for (let i = 0; i < length; i++) {
            let itemPrice = await list.$$('.inventory_item')[i].$('.inventory_item_price').getText();
            inventory.push(parseFloat(itemPrice.slice(1, itemPrice.length)));
        }
        await expect (inventory.toString()).toEqual(inventory.sort((a, b) => a - b).toString());
        await browser.refresh();
    });
    it('should filter by higher to lower price order when selecting', async () => {
        ProductsPage.filterHilo();
        await browser.pause(1000);
        const list = ProductsPage.invList;
        const length = await list.$$('.inventory_item').length;
        let inventory = [];
        for (let i = 0; i < length; i++) {
            let itemPrice = await list.$$('.inventory_item')[i].$('.inventory_item_price').getText();
            inventory.push(parseFloat(itemPrice.slice(1, itemPrice.length)));
        }
        await expect (inventory.toString()).toEqual(inventory.sort((a, b) => b - a).toString());
        await browser.refresh();
    });
});