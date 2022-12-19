import {test,page,expect} from "@playwright/test";

test("KarStation workshop user registered successfully",async({page})=>{

await page.goto("https://workshop.reg.karstation.com/#/login"); //Load Karstation landing page



await page.getByRole('link', { name: 'Register here' }).click(); //getting into registeration 

await page.getByLabel('Full Name').click(); //full name
await page.fill ('#fullname','Peter P');


//await page.pause();


await page.getByLabel('Email').click(); //email

await page.fill ('#email','mnmrrazeen@gmail.com');

//await page.pause();


await page.getByLabel('NIC Number').click(); //NIC

await page.fill ('#nic','991232751v');

//await page.pause();

await page.getByLabel('Mobile Number').click(); //Mobile number

await page.fill ('#mobileNo','0777353590');

//await page.pause();



await page.getByRole('textbox', { name: '* Password :' }).click(); //password

await page.fill ('#password','Test2@test');

//await page.pause();



await page.getByLabel('Confirm Password').click(); //confirm password

await page.fill ('#confirmpassword','Test2@test');

await page.pause();



await page.getByRole('button', { name: 'Register' }).click(); //Proceed with registration


});