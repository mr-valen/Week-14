import LoginPage from  '../pageobjects/login.page';

describe('SwagLabs Login application', () => {
    beforeAll('Navigate to url', () => {
        browser.url("https://www.saucedemo.com/")
    })
    it('should not login and give feedback when user is locked', async () => {
        await LoginPage.login('locked_out_user', 'secret_sauce');
        await expect(browser).toHaveUrl("https://www.saucedemo.com/");
        await expect(LoginPage.errorMsg).toBeDisplayedInViewport();
        await expect(LoginPage.errorMsg).toHaveText("Epic sadface: Sorry, this user has been locked out.");
    });
});