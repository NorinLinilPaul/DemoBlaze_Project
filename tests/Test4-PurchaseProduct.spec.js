
import { test } from '@playwright/test';
import { ObjectRepo } from '../DemoBlaze-Pages/ObjectRepo.js';

test(`Sign Up and then Login, add product to cart: `, async({page})=>{

const objectRepo = new ObjectRepo(page); 
const signUp = objectRepo.fetchSignUpPage(); 
const uniqueUsername = `TestUser ${Date.now()}`
const password = `Pass${Date.now()}`
await signUp.goToWebsite('/') //call the goToWebsite method on the SignUpPage object to navigate to the website
 // Signup and capture credentials
    const credentials = await signUp.enterSignUpDetails(uniqueUsername, password);
    const loginPage = objectRepo.fetchLoginPage()
    // Immediately login with those credentials
    await loginPage.clickLoginButton() 
    await loginPage.login(credentials.username, credentials.password); //call the enterSignUpDetails method on the SignUpPage object to enter the signup details and click on the signup button
    await loginPage.verifyLoginSuccess(credentials.username)
  const phones=objectRepo.fetchPhonesPage()
  
  await phones.clickOnPhoneItem("Samsung galaxy s6")
  await phones.performAddToCart()
  await phones.confirmProductAddedToCart()



})
