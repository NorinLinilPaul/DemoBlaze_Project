export class SideMenuItemsPage{
    constructor(page){
    this.page=page
    this.SideMenus=await page.locator("div[class='col-lg-3']")
    this.PhonesMenu=await page.getByRole('link', { name: 'Phones' })
    this.LaptopsMenu=await page.getByRole('link', { name: 'Laptops' })
    this.MonitorsMenu=await page.getByRole('link', { name: 'Monitors' })

    }



}