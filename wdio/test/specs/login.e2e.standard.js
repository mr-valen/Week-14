import LoginPage from  '../pageobjects/login.page';
import ProductsPage from '../pageobjects/products.page';

describe('SwagLabs Login application', () => {
    beforeAll('Navigate to url', () => {
        browser.url("https://www.saucedemo.com/")
    })
    it('should not login and give feedback when username and password do not match any user', async () => {
        await LoginPage.login('invaliduser', 'invalidpassword');
        await expect(browser).toHaveUrl("https://www.saucedemo.com/");
        await expect(LoginPage.errorMsg).toBeDisplayedInViewport();
        await expect(LoginPage.errorMsg).toHaveText("Epic sadface: Username and password do not match any user in this service");
    });
    it('should not login and give feedback when password does not match user', async () => {
        await LoginPage.login('standard_user', 'invalidpassword');
        await expect(browser).toHaveUrl("https://www.saucedemo.com/");
        await expect(LoginPage.errorMsg).toBeDisplayedInViewport();
        await expect(LoginPage.errorMsg).toHaveText("Epic sadface: Username and password do not match any user in this service");
    });
    it('should login and redirect to products page as standard user', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
        await expect(ProductsPage.btnBurger).toBeDisplayedInViewport();
        await ProductsPage.logout();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/");
    });
});