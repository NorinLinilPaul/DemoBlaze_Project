import { expect } from "@playwright/test"

export class LoginPage{    
constructor(page){
    this.page=page //this keyword is used to refer to the current instance of the class, and we are assigning the page object passed as a parameter to this.page so that we can use it in other methods of the class to interact
    this.username=page.locator('#loginusername')
    this.password=page.locator('#loginpassword')
    this.loginBtn=page.getByRole('button', { name: 'Log in' })
    this.loginLink=page.getByRole('link', { name: 'Log in' })
    

        
}
async goToWebsite(url){
    await this.page.goto(url) //this is the method to navigate to the website

}
async login(userName,password){
        await this.username.fill(userName)
        await this.password.fill(password)
        await this.loginBtn.click()
}
async clickLoginButton(){
    await this.loginLink.click()

}
async verifyLoginSuccess(username){
    const welcomeMessage=this.page.locator('#nameofuser')
    await welcomeMessage.waitFor({state:'visible'})
    const welcomeMsgText=await welcomeMessage.textContent()
    if(welcomeMsgText===`Welcome ${username}`){
        console.log("Login successful, welcome message is displayed correctly.")
    }else{
        console.log("Login failed, welcome message is not displayed correctly.")
    }
}
async verifyLoginFailure(username){
    const welcomeMessage=this.page.locator('#nameofuser')
    await welcomeMessage.waitFor({state:'hidden'})
    await expect(welcomeMessage).not.toBeVisible()
    await expect(welcomeMessage).not.toHaveText(`Welcome ${username}`)
    await expect(welcomeMessage).toBeHidden()
    console.log("Login failed, welcome message is not displayed as expected.")
}
}