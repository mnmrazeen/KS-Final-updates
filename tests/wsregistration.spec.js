import {test,page,expect} from "@playwright/test";

test("KarStation workshop registration completed successfully",async({page})=>{

await page.goto("https://workshop.reg.karstation.com/#/login"); //Load Karstation landing page


//wait
await page.getByLabel('Username').click(); //Entering user name from email to login

await page.fill ('#login_userName','1671168406681LR');



await page.getByLabel('Password').click(); //Entering password from user registration

await page.fill ('#login_password','Test2@test');


await page.pause();

await page.getByRole('button', { name: 'Login' }).click(); //Proceed with login

await page.pause();

await page.getByPlaceholder('Your workshop name').click(); //workshop name
await page.fill ('#workshopName','Auto Mirage');


await page.getByPlaceholder('Your trade name').click(); //trade name
await page.fill ('#tradeName','Auto India PVT LTD');


await page.getByPlaceholder('Your registration number').click(); //registration number
await page.fill ('#workshopRegistrationNumber','2019/Western/22');


await page.getByPlaceholder('Your workshop address').click(); //workshop address
await page.fill ('#workshopAddress','No 12, Main street Galle, Srilanka.');


await page.getByPlaceholder('Your google map link').click(); //Google map link
await page.fill ('#locationLink','https://goo.gl/maps/CAm8chkWwRjRYrJy9');

await page.getByPlaceholder('Your workshop located city').click(); //City
await page.fill ('#city','Colombo');



await page.getByRole('listitem').filter({ hasText: 'Business Registration DocumentUpload CertificatesBrowse' }).locator('button').click();//File upload 01
await page.setInputFiles("input[type='file']", 'tests/files/bank.pdf');


await page.getByRole('button', { name: 'Next' }).click(); 



//Tools

await page.locator('div:nth-child(3) > .ant-col > .ant-list-item > .ant-card > .ant-card-actions > li > span > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click();
await page.locator('div:nth-child(11) > .ant-col > .ant-list-item > .ant-card > .ant-card-actions > li > span > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click();
await page.locator('div:nth-child(17) > .ant-col > .ant-list-item > .ant-card > .ant-card-actions > li > span > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click();
await page.locator('div:nth-child(33) > .ant-col > .ant-list-item > .ant-card > .ant-card-actions > li > span > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click();

//await page.pause();

await page.getByRole('button', { name: 'Next' }).click(); 

//Facilities

await page.locator('div:nth-child(3) > .ant-col > .ant-list-item > .ant-card > .ant-card-actions > li > span > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click();
await page.locator('div:nth-child(10) > .ant-col > .ant-list-item > .ant-card > .ant-card-actions > li > span > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click();
//await page.pause();
await page.getByRole('button', { name: 'Next' }).click(); 

//Add employee

await page.getByRole('button', { name: 'plus Add Employee' }).click(); 

await page.getByLabel('Full Name').click(); 
await page.fill ('#nest-messages_user_name','Kumar sangakkara');

await page.getByLabel('NIC Number').click(); 
await page.fill ('#nest-messages_user_nic','993252751v');
await page.pause();
await page.getByLabel('Mobile Number').click(); 
await page.fill ('#nest-messages_user_mobile','0766484555');

//selector

await page.getByLabel('Emloyee designation').click();
await page.getByText('Senior Technician').nth(1).click();

  await page.getByLabel('Address').click();
  await page.getByLabel('Address').fill('No 555, Nuwareliya road Gampola');


  await page.getByRole('button', { name: 'Save' }).click();

  await page.getByRole('button', { name: 'plus Add Employee' }).click();

  await page.getByLabel('Full Name').click();
  await page.getByLabel('Full Name').fill('Peter parker');


  await page.getByLabel('NIC Number').click();
 
  await page.getByLabel('NIC Number').fill('972252755v');
  await page.getByLabel('Mobile Number').click();

  await page.getByLabel('Mobile Number').fill('0773535235');

  await page.locator('.ant-select-selection-search').click();

  await page.getByText('Consultant / Subsystems Engineer').nth(1).click();

  await page.getByLabel('Address').click();
  await page.getByLabel('Address').fill('no 67/3 , main street colombo 07');

  await page.pause();

  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Next' }).click();

  await page.getByRole('row', { name: 'Vehicle Manufacturing close' }).getByRole('switch', { name: 'close' }).click();
  await page.getByRole('row', { name: 'Vehicle Assembly close' }).getByRole('switch', { name: 'close' }).click();
  await page.getByRole('row', { name: 'Component /Part Manufacturing close' }).getByRole('switch', { name: 'close' }).click();
  await page.getByRole('row', { name: 'Component /Part Assembly close' }).getByRole('switch', { name: 'close' }).click();
  await page.getByRole('row', { name: 'CAT-C & CAT-D Write-off Correction close' }).getByRole('switch', { name: 'close' }).click();
  await page.getByRole('row', { name: 'Fitness Test close' }).getByRole('switch', { name: 'close' }).click();
await page.pause();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();

  await page.getByLabel('Vehicle').first().check();
  await page.getByLabel('Vehicle').nth(1).check();
  await page.getByLabel('Vehicle').nth(2).check();
  await page.getByLabel('Animal').nth(3).check();//wrong IP
  await page.getByLabel('Animal').nth(4).check();//Wrong IP
  await page.pause();

  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('img').nth(2).click();
  await page.getByRole('button', { name: 'plus Upload' }).click();

});