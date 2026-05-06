import { expect } from "@playwright/test"

export class MonitorsPage{
    constructor(page){
    this.page=page    
    this.addToCartBtn=page.locator('a:has-text("Add to cart")') //locate add to cart link on product details page

    
    
    }
  //use for loop to loop through the monitor items and click on the one that matches the monitor name passed as a parameter
async clickOnMonitorItem(monitorName){
    await this.page.getByRole('link', { name: monitorName }).click()
    await this.page.waitForURL('**/prod.html**')
    await this.addToCartBtn.waitFor({state:'visible'});
}

async performAddToCart(){
    await this.addToCartBtn.waitFor({state:'visible'});
    await this.addToCartBtn.click()
}

async confirmMonitorProductAddedToCart(){
    const cartdialogPromise = this.cartdialogPromise || this.page.waitForEvent('dialog')
    const cartdialog = await cartdialogPromise
        await expect(cartdialog.message()).toBe('Product added.')
        await cartdialog.accept() 

}

}