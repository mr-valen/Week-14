import LoginPage from  '../pageobjects/login.page';

describe('SwagLabs Login application', () => {
    beforeAll('Navigate to url', () => {
        browser.url("https://www.saucedemo.com/")
    })
    it('should not login and give feedback when both inputs are empty', async () => {
        await LoginPage.login('', '');
        await expect(browser).toHaveUrl("https://www.saucedemo.com/");
        await expect(LoginPage.errorMsg).toBeDisplayedInViewport();
        await expect(LoginPage.errorMsg).toHaveText("Epic sadface: Username is required");
        await browser.refresh();
    });
    it('should not login and give feedback when username input is empty', async () => {
        await LoginPage.login('', 'secret_sauce');
        await expect(browser).toHaveUrl("https://www.saucedemo.com/");
        await expect(LoginPage.errorMsg).toBeDisplayedInViewport();
        await expect(LoginPage.errorMsg).toHaveText("Epic sadface: Username is required");
        await browser.refresh();
    });
    it('should not login and give feedback when password input is empty', async () => {
        await LoginPage.login('standard_user', '');
        await expect(browser).toHaveUrl("https://www.saucedemo.com/");
        await expect(LoginPage.errorMsg).toBeDisplayedInViewport();
        await expect(LoginPage.errorMsg).toHaveText("Epic sadface: Password is required");
    });
});


