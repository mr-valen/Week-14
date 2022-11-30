import LoginPage from  '../pageobjects/login.page';
import ProductsPage from '../pageobjects/products.page';
import CartPage from '../pageobjects/cart.page'
import CheckoutOnePage from '../pageobjects/checkoutone.page'
import CheckoutTwoPage from '../pageobjects/checkouttwo.page'
import CheckoutComplete from '../pageobjects/checkoutcomplete.page'

describe('SwagLabs Login application', () => {
    beforeAll('Navigate to url and login as standard', () => {
        browser.url("https://www.saucedemo.com/");
        LoginPage.login('standard_user', 'secret_sauce');
    })
    it('should add first item to cart', async () => {
        ProductsPage.addToCart();
        ProductsPage.goToCart();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/cart.html");
    });
    it('should contain one item and should redirect when clicking checkout', async () => {
        CartPage.checkout();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/checkout-step-one.html");
    });
    it('should redirect when filling all inputs and clicking continue', async () => {
        CheckoutOnePage.checkoutOK();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/checkout-step-two.html");
    });
    it('should redirect when clicking finish', async () => {
        CheckoutTwoPage.finish();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/checkout-complete.html");
    });
    it('should come back to home when clicking on the button', async () => {
        CheckoutComplete.backHome();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
    });
});