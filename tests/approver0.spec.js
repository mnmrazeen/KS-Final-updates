import {test,page,expect} from "@playwright/test";

test("KarStation workshop registration completed successfully",async({page})=>{

await page.goto("https://workshop.reg.karstation.com/#/login"); //Load Karstation landing page


//wait
await page.getByLabel('Username').click(); //Entering approver0 name from email to login

await page.fill ('#login_userName','approver0');



await page.getByLabel('Password').click(); //Entering password for approver

await page.fill ('#login_password','1234Qwer$');


//await page.pause();

await page.getByRole('button', { name: 'Login' }).click(); //Proceed with login



await page.getByRole('row', { name: 'rtj dgs M Tue Nov 29 2022 Approver Level0 Confirm Payment' }).getByRole('button', { name: 'Confirm Payment' }).click();

  await page.getByLabel('Reference Number').click();
  await page.getByLabel('Reference Number').fill('123045');
  
  await page.pause();

});