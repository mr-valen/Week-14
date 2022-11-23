import LoginPage from  '../pageobjects/login.page';
import ProductsPage from '../pageobjects/products.page';

describe('SwagLabs Login application', () => {
    beforeAll('Navigate to url', () => {
        browser.url("https://www.saucedemo.com/")
    })
    it('should login and redirect to products page as glitch user', async () => {
        await LoginPage.login('performance_glitch_user', 'secret_sauce');
        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
        await expect(ProductsPage.btnBurger).toBeDisplayedInViewport();
        await ProductsPage.logout();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/");
    });
});