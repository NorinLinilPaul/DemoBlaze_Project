import { expect } from "@playwright/test";
export class SignUpDemoBlaze{
    constructor(page){
        this.page=page
        this.signUpLink = page.getByRole("link",{name:"Sign up"})
        this.signUpDialogHeader=page.locator('.modal-header:has-text("Sign up")')
        this.usernameLabel=page.getByLabel("Username:",{exact:true})
        this.passwordLabel=page.getByLabel("Password:",{exact:true})
        this.usernameTextBox=page.locator('#sign-username')
        this.passwordTextBox=page.locator('#sign-password')
        this.signUpBtn=page.getByRole("button",{name:"Sign up"})
        

    }
async goToWebsite(url){
    await this.page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 })
}    
async enterSignUpDetails(username,password){
    await this.signUpLink.click()
    const dialogPromise = this.page.waitForEvent('dialog') 
    await this.signUpDialogHeader.waitFor({state:"visible"})
    await this.usernameTextBox.fill(username)
    await this.passwordTextBox.fill(password)
    await this.signUpBtn.click()
    const dialog = await dialogPromise
    await expect(dialog.message()).toBe('Sign up successful.')
    await dialog.accept()
    return {username,password} //returning the username and password as an object to use in the test for login with the same credentials after signup


}
}