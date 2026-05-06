import { test } from '@playwright/test';
import { ObjectRepo } from '../DemoBlaze-Pages/ObjectRepo.js';

test('Login with valid credentials -> Select a product -> Add to Cart -> Click "ok" on the popup', async ({ page }) => {
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

    const phones = objectRepo.fetchPhonesPage();
    await phones.clickOnPhoneItem("Samsung galaxy s6");
    await phones.performAddToCart();
    await phones.confirmProductAddedToCart();
});