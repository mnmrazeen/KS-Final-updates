import {test,page,expect} from "@playwright/test";

test("KarStation workshop user Loggedin successfully",async({page})=>{

await page.goto("https://workshop.reg.karstation.com/#/login"); //Load Karstation landing page

//await page.pause();

await page.getByLabel('Username').click(); //Entering user name from email to login

await page.fill ('#login_userName','1671083390267DZ');

//await page.pause();

await page.getByLabel('Password').click(); //Entering password from user registration

await page.fill ('#login_password','Test2@test');

await page.pause();
await page.getByRole('button', { name: 'Login' }).click(); //Proceed with login
});