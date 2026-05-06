import { expect } from "@playwright/test";

export class CartPage {
    constructor(page) {
        this.page = page;
        this.cartLink = page.locator('#cartur');
        this.placeOrderBtn = page.getByRole('button', { name: 'Place Order' });
        this.nameField = page.locator('#name');
        this.countryField = page.locator('#country');
        this.cityField = page.locator('#city');
        this.cardField = page.locator('#card');
        this.monthField = page.locator('#month');
        this.yearField = page.locator('#year');
        this.purchaseBtn = page.getByRole('button', { name: 'Purchase' });
        this.successMessage = page.locator('.sweet-alert h2');
        this.okBtn = page.getByRole('button', { name: 'OK' });
    }

    async goToCart() {
        await this.cartLink.click();
        await this.page.waitForURL('**/cart.html');
    }

    async placeOrder() {
        await this.placeOrderBtn.click();
    }

    async fillOrderDetails(name, country, city, card, month, year) {
        await this.nameField.fill(name);
        await this.countryField.fill(country);
        await this.cityField.fill(city);
        await this.cardField.fill(card);
        await this.monthField.fill(month);
        await this.yearField.fill(year);
    }

    async purchase() {
        await this.purchaseBtn.click();
    }

    async confirmPurchase() {
        await expect(this.successMessage).toHaveText('Thank you for your purchase!');
        await this.okBtn.click();
    }
}