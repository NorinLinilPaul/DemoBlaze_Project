// @ts-check
import { test } from '@playwright/test';
import { ObjectRepo } from '../DemoBlaze-Pages/ObjectRepo';
import fs from 'fs';

test('Sign Up',async({page})=>{
// await page.goto('/') // baseURL is set in the config file, so we can use a relative URL here
const objectRepo =new ObjectRepo(page) //pass the page object to the ObjectRepo class to initialize the page object in the class and use it in the methods of the class
const signUp=objectRepo.fetchSignUpPage() //fetch the SignUpPage object from the ObjectRepo class
const uniqueUsername = `testuser${Date.now()}`
await signUp.goToWebsite('/') //call the goToWebsite method on the SignUpPage object to navigate to the website

// Capture the returned credentials
// const credentials = await signUp.enterSignUpDetails(uniqueUsername,'Test@123') //call the enterSignUpDetails method on the SignUpPage object to enter the signup details and click on the signup button
await signUp.enterSignUpDetails(uniqueUsername,'Test@123')
// Store credentials for use in login test
// fs.writeFileSync('credentials.json', JSON.stringify(credentials, null, 2))
// console.log('Credentials stored:', credentials)
});

