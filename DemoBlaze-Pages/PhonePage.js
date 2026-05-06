import { expect } from "@playwright/test"

export class PhonePage{
    constructor(page){
    this.page=page    
    this.addToCartBtn=page.locator('a:has-text("Add to cart")') //locate add to cart link on product details page

    
    
    }
  //use for loop to loop through the phone items and click on the one that matches the phone name passed as a parameter
async clickOnPhoneItem(phoneName){
    const items=this.page.locator('div.card.h-100')
    this.phoneItems=items //items is a locator that locates all the phone items on the page, we are using the class name of the div that contains the phone items to locate them
    await items.first().waitFor({state:'visible'})
    const count=await this.phoneItems.count() //get the count of the phone items on the page  
    for(let i=0;i<count;i++){
        const item=this.phoneItems.nth(i)
        const itemName=await item.locator('h4.card-title').textContent()
        if(itemName && itemName.trim()===phoneName){
            await item.locator('h4.card-title a').click()
            await this.addToCartBtn.waitFor({state:'visible'});
            break
        }

    }
}
async performAddToCart(){
     const currentUrl=await this.page.url()
     if(currentUrl.includes('prod.html')){
        await this.addToCartBtn.waitFor({state:'visible'});
        this.cartdialogPromise = this.page.waitForEvent('dialog')
        await this.addToCartBtn.click()
     }


}
async confirmProductAddedToCart(){
    const cartdialogPromise = this.cartdialogPromise || this.page.waitForEvent('dialog')
    const cartdialog = await cartdialogPromise
        await expect(cartdialog.message()).toBe('Product added.')
        await cartdialog.accept() 

}

}