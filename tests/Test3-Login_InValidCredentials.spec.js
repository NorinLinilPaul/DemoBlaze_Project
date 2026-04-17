// @ts-check
import { test } from '@playwright/test';
import { ObjectRepo } from '../DemoBlaze-Pages/ObjectRepo.js';
import { expectFailure } from 'node:test';
const cred=require('../fixtures/shared-data.js')

test('Sign Up and then Login with inavlid username invalid password',async({page})=>{
// await page.goto('/') // baseURL is set in the config file, so we can use a relative URL here
const objectRepo =new ObjectRepo(page) //pass the page object to the ObjectRepo class to initialize the page object in the class and use it in the methods of the class
const signUp=objectRepo.fetchSignUpPage() //fetch the SignUpPage object from the ObjectRepo class
const uniqueUsername = `TestUser ${Date.now()}`
const invalidPassword = `Pass ${Date.now()}`
await signUp.goToWebsite('/') //call the goToWebsite method on the SignUpPage object to navigate to the website
 // Signup and capture credentials
    const credentials = await signUp.enterSignUpDetails(uniqueUsername, "Test@123");
    const loginPage = objectRepo.fetchLoginPage() //fetch the LoginPage object from the ObjectRepo class
    // Immediately login with those credentials
    await loginPage.clickLoginButton() 
    await loginPage.login(credentials.username + `${Date.now()}`, invalidPassword); //call the enterSignUpDetails method on the SignUpPage object to enter the signup details and click on the signup button
    await loginPage.verifyLoginFailure(credentials.username)

})
test('Sign Up and then Login with valid username invalid password',async({page})=>{
    // await page.goto('/') // baseURL is set in the config file, so we can use a relative URL here
const objectRepo =new ObjectRepo(page) //pass the page object to the ObjectRepo class to initialize the page object in the class and use it in the methods of the class
const signUp=objectRepo.fetchSignUpPage() //fetch the SignUpPage object from the ObjectRepo class
const uniqueUsername = `TestUser ${Date.now()}`
const invalidPassword = `Pass ${Date.now()}`
await signUp.goToWebsite('/') //call the goToWebsite method on the SignUpPage object to navigate to the website
 // Signup and capture credentials
    const credentials = await signUp.enterSignUpDetails(uniqueUsername, "Test@123**");
    const loginPage = objectRepo.fetchLoginPage() //fetch the LoginPage object from the ObjectRepo class
    // Immediately login with those credentials
    await loginPage.clickLoginButton() 
    await loginPage.login(credentials.username, invalidPassword); //call the enterSignUpDetails method on the SignUpPage object to enter the signup details and click on the signup button
    await loginPage.verifyLoginFailure(credentials.username)

})
test('Sign Up and then Login with invalid username valid password',async({page})=>{
    // await page.goto('/') // baseURL is set in the config file, so we can use a relative URL here
const objectRepo =new ObjectRepo(page) //pass the page object to the ObjectRepo class to initialize the page object in the class and use it in the methods of the class
const signUp=objectRepo.fetchSignUpPage() //fetch the SignUpPage object from the ObjectRepo class
const uniqueUsername = `TestUser ${Date.now()}`
await signUp.goToWebsite('/') //call the goToWebsite method on the SignUpPage object to navigate to the website
 // Signup and capture credentials
    const credentials = await signUp.enterSignUpDetails(uniqueUsername, "Test@123%%%");
    const loginPage = objectRepo.fetchLoginPage() //fetch the LoginPage object from the ObjectRepo class
    // Immediately login with those credentials
    await loginPage.clickLoginButton() 
    await loginPage.login(credentials.username + `${Date.now()}`, "Test@123%%%"); //call the enterSignUpDetails method on the SignUpPage object to enter the signup details and click on the signup button
    await loginPage.verifyLoginFailure(credentials.username)

})
