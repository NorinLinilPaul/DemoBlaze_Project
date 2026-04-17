
import { test } from '@playwright/test';
import { ObjectRepo } from '../DemoBlaze-Pages/ObjectRepo.js';
const cred=require('../fixtures/shared-data.js')

test('Sign Up and then Login',async({page})=>{
// await page.goto('/') // baseURL is set in the config file, so we can use a relative URL here
const objectRepo =new ObjectRepo(page) //pass the page object to the ObjectRepo class to initialize the page object in the class and use it in the methods of the class
const signUp=objectRepo.fetchSignUpPage() //fetch the SignUpPage object from the ObjectRepo class
const uniqueUsername = `testuser${Date.now()}`
await signUp.goToWebsite('/') //call the goToWebsite method on the SignUpPage object to navigate to the website
 // Signup and capture credentials
    const credentials = await signUp.enterSignUpDetails(uniqueUsername, 'Test@123');
    const loginPage = objectRepo.fetchLoginPage() //fetch the LoginPage object from the ObjectRepo class
    // Immediately login with those credentials
    await loginPage.clickLoginButton() 
    await loginPage.login(credentials.username, credentials.password); //call the enterSignUpDetails method on the SignUpPage object to enter the signup details and click on the signup button
    await loginPage.verifyLoginSuccess(credentials.username) //call the verifyLoginSuccess method on the LoginPage object to verify that the login was successful by checking the welcome message
});
