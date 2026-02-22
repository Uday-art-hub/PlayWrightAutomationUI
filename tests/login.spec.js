const{test,expect}=require('@playwright/test');

test.use({viewport:{width:1500,height:800}});  //setting viewport for all the tests in this file, it will override the viewport set in playwright.config.js file

test("Login Test",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    console.log(page.viewportSize().height);
    console.log(page.viewportSize().width);
    expect(page.url()).toContain("login");
    await page.getByPlaceholder("Username").fill("Admin");  //using placeholder attribute
    await page.locator("input[name='password']").fill("admin123");  //css selector
    await page.locator("//button[@type='submit']").click();   //xpath selector
    //await page.waitForTimeout(5000);   //wait for 5 seconds practically not used in real time scenarios, in real time we use it for debugging purpose
    expect(page.url()).toContain("dashboard");  
    //LogOut 
    await page.locator(".oxd-userdropdown-tab").click();
    await page.getByText("Logout").click();
    expect(page.url()).toContain("login");
})