import { SignUpDemoBlaze } from "./SignUpPage";
import { LoginPage } from "./LoginPage";
import { LaptopsPage } from "./LaptopsPage";
import { MonitorsPage } from "./MonitorsPage";
import { PhonePage } from "./PhonePage";
import { CartPage } from "./CartPage";
import { SideMenuItemsPage } from "./SideMenuItemsPage";

export class ObjectRepo {
    constructor(page) {
        this.page = page;
        this.signupObj = new SignUpDemoBlaze(this.page);
        this.loginObj = new LoginPage(this.page);
        this.laptopsObj = new LaptopsPage(this.page);
        this.monitorsObj = new MonitorsPage(this.page);
        this.phonesObj = new PhonePage(this.page);
        this.cartObj = new CartPage(this.page);
        this.sideMenuObj = new SideMenuItemsPage(this.page);
    }

    fetchSignUpPage() {
        return this.signupObj;
    }

    fetchLoginPage() {
        return this.loginObj;
    }

    fetchLaptopsPage() {
        return this.laptopsObj;
    }

    fetchMonitorsPage() {
        return this.monitorsObj;
    }

    fetchPhonesPage() {
        return this.phonesObj;
    }

    fetchCartPage() {
        return this.cartObj;
    }
    fetchSideMenuItemsPage() {
        return this.sideMenuObj;
    }

}