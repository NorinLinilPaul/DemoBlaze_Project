import { test } from '@playwright/test';
import { ObjectRepo } from '../DemoBlaze-Pages/ObjectRepo.js';

test('Login with valid credentials -> Select a product under Monitors -> Add to Cart -> Click "ok" on the popup -> Add details -> Purchase', async ({ page }) => {
    const objectRepo = new ObjectRepo(page);
    const signUp = objectRepo.fetchSignUpPage();
    const uniqueUsername = `TestUser${Date.now()}`;
    const password = `Pass${Date.now()}`;
    await signUp.goToWebsite('/');
    const credentials = await signUp.enterSignUpDetails(uniqueUsername, password);
    const loginPage = objectRepo.fetchLoginPage();
    await loginPage.clickLoginButton();
    await loginPage.login(credentials.username, credentials.password);
    await loginPage.verifyLoginSuccess(credentials.username);

    const sideMenu = objectRepo.fetchSideMenuItemsPage();
    const monitors = objectRepo.fetchMonitorsPage();
    await sideMenu.clickMonitorsMenu();
    await monitors.clickOnMonitorItem("Apple monitor 24");
    await monitors.performAddToCart();
    await monitors.confirmMonitorProductAddedToCart();

    const cart = objectRepo.fetchCartPage();
    await cart.goToCart();
    await cart.placeOrder();
    await cart.fillOrderDetails('John Doe', 'USA', 'New York', '1234567890123456', '12', '2025');
    await cart.purchase();
    await cart.confirmPurchase();
});