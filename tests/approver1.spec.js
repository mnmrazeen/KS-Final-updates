import {test,page,expect} from "@playwright/test";

test("KarStation workshop registration completed successfully",async({page})=>{

await page.goto("https://workshop.reg.karstation.com/#/login"); //Load Karstation landing page


//wait
await page.getByLabel('Username').click(); //Entering approver1 name from email to login

await page.fill ('#login_userName','approver1');



await page.getByLabel('Password').click(); //Entering password for approver1

await page.fill ('#login_password','1234Qwer$');




await page.getByRole('button', { name: 'Login' }).click(); //Proceed with login

await page.pause();

await page.getByText('In-progress').click();
  await page.getByText('On hold').click();
  await page.getByText('Physical Inspections').click();
  await page.getByText('Rejections').click();
  await page.getByText('New').click();
  await page.getByRole('row', { name: 'asf fsa S Approver Level1 Start Review' }).getByRole('button', { name: 'Start Review' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Previous' }).click();
  await page.getByRole('button', { name: 'Previous' }).click();
  await page.getByRole('button', { name: 'Previous' }).click();
  await page.getByRole('button', { name: 'Previous' }).click();

  await page.pause();
  await page.pause();
});