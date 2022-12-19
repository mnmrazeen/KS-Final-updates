import {test,page,expect} from "@playwright/test";

test("KarStation workshop registration completed successfully",async({page})=>{

await page.goto("https://workshop.reg.karstation.com/#/login"); //Load Karstation landing page


//wait
await page.getByLabel('Username').click(); //Entering approver2 name from email to log

await page.fill ('#login_userName','approver2');



await page.getByLabel('Password').click(); //Entering password for approver2

await page.fill ('#login_password','1234Qwer$');




await page.getByRole('button', { name: 'Login' }).click(); //Proceed with login
await page.pause();

await page.getByText('In-progress').click();
await page.getByText('On hold').click();
await page.getByText('Physical Inspections').click();
await page.getByText('Rejections').click();
await page.getByText('Pending Payments').click();
await page.getByText('New').click();
await page.getByRole('row', { name: 'asf fsa S Approver Level1 View' }).getByRole('button', { name: 'View' }).click();
await page.getByRole('button', { name: 'Next' }).click();
await page.getByRole('button', { name: 'Next' }).click();
await page.getByRole('button', { name: 'Next' }).click();
await page.getByRole('button', { name: 'Next' }).click();
await page.getByRole('button', { name: 'Previous' }).click();
await page.getByRole('button', { name: 'Previous' }).click();
await page.getByRole('button', { name: 'Previous' }).click();
await page.getByRole('button', { name: 'Previous' }).click();
await page.getByRole('img', { name: 'close-circle' }).locator('svg').click();
await page.getByText('In-progress').click();
await page.getByRole('row', { name: 'Sunil Motors Matara S Fri Nov 25 2022 -17 Approver Level1 View' }).getByRole('button', { name: 'View' }).click();
await page.getByRole('button', { name: 'Next' }).click();
await page.getByRole('button', { name: 'Next' }).click();
await page.getByRole('button', { name: 'Next' }).click();
await page.getByRole('button', { name: 'Next' }).click();
await page.getByRole('button', { name: 'Previous' }).click();
await page.getByRole('button', { name: 'Previous' }).click();
await page.getByRole('button', { name: 'Previous' }).click();
await page.getByRole('button', { name: 'Previous' }).click();
await page.getByRole('img', { name: 'close-circle' }).locator('svg').click();
await page.getByText('On hold').click();
await page.getByText('Physical Inspections').click();
await page.getByText('Rejections').click();
await page.getByText('Pending Payments').click();
await page.getByRole('row', { name: 'rtj dgs M Tue Nov 29 2022 Approver Level0 View' }).getByRole('button', { name: 'View' }).click();


});