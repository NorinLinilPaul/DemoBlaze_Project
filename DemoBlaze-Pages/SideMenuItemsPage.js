export class SideMenuItemsPage{
    constructor(page){
    this.page=page
    this.PhonesMenu=page.getByRole('link', { name: 'Phones' })
    this.LaptopsMenu=page.getByRole('link', { name: 'Laptops' })
    this.MonitorsMenu=page.getByRole('link', { name: 'Monitors' })

    }

    async clickPhonesMenu() {
        await this.PhonesMenu.click();
    }

    async clickLaptopsMenu() {
        await this.LaptopsMenu.click();
    }

    async clickMonitorsMenu() {
        await this.MonitorsMenu.click();
    }

}