import LoginPage from  '../pageobjects/login.page';
import ProductsPage from '../pageobjects/products.page';

describe('SwagLabs Login application', () => {
    beforeAll('Navigate to url and login as standard', () => {
        browser.url("https://www.saucedemo.com/");
        LoginPage.login('standard_user', 'secret_sauce');
    })
    it('should redirect to twitter when clicking that icon', async () => {
        ProductsPage.goTwitter();
        await expect(browser).toHaveUrl("https://twitter.com/saucelabs");
        await browser.switchWindow('saucedemo');
    });
    it('should redirect to facebook when clicking that icon', async () => {
        ProductsPage.goFacebook();
        await expect(browser).toHaveUrl("https://www.facebook.com/saucelabs");
        await browser.switchWindow('saucedemo');
    });
    it('should redirect to linkedin when clicking that icon', async () => {
        ProductsPage.goLinkedin();
        await expect(browser).toHaveUrl("https://www.linkedin.com/company/sauce-labs/?original_referer=");
    });
});