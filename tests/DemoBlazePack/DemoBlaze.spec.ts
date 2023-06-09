import {test,expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
   await page.goto('https://www.demoblaze.com/');
 }); 

test.describe("Home page",()=>{

   test('Verify that the website is accessable',async({page})=>{
      await expect(page).toHaveTitle('STORE');
      await expect(page).toHaveURL('https://www.demoblaze.com/');
      
   });

   test('Verify that all the links on the navbar are up and running',async({page})=>{
     await expect(page.getByText("Home ")).toBeEnabled();
     await expect(page.getByText("Cart")).toBeEnabled();
     const cartLocate= page.getByText("Cart");
     await cartLocate.click();
     let expectedString : string;
     expectedString="Products"
     await expect(page.getByText(expectedString)).toBeVisible();
     await page.goBack()
     const contactLink=page.getByRole('link', { name: 'Contact' });
     await expect(contactLink).toBeEnabled()
     contactLink.click();
     let contactVerificationString:string;
     contactVerificationString ="Send message";
     await expect(page.getByText(contactVerificationString)).toBeVisible();
     await page.locator("xpath=(//button[@class='close'])[1]").click();
     
     const loginlink= page.getByText("Log in").nth(2);
     await expect(loginlink).toBeEnabled();
     await loginlink.click();
     const closeButtonLocate= page.locator("xpath=(//button[@class='close'])[3]");
     await expect(closeButtonLocate).toBeVisible();
     await closeButtonLocate.click();

    });

   test('Verify that all the links on the sidebar are up and running',async({page})=>{
       await expect(page.getByText("Phones")).toBeVisible();
       await expect(page.getByText("Phones")).toBeEnabled();

       await expect(page.getByText("Laptops")).toBeVisible();
       expect(await page.getByText("Laptops").isEnabled()).toBeTruthy();
       await expect(page.getByText("Laptops")).toBeEnabled();

       await expect(page.getByText("Monitors")).toBeVisible();
       expect(await page.getByText("Monitors").isVisible()).toBeTruthy();
       expect(await page.getByText("Monitors").isHidden()).toBeFalsy();
       await expect(page.getByText("Monitors")).toBeEnabled();
       await expect(page.getByText("Get in Touch")).toBeInViewport();




    });

  


});


