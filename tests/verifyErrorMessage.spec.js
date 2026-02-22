const {expect,test}=require('@playwright/test')

test("Verify Error Message",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    expect(page.url()).toContain("login");
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("adminsjdasja");
    await page.locator("//button[@type='submit']").click();
    const errorMessage=await page.locator(".oxd-text.oxd-text--p.oxd-alert-content-text").textContent();
    console.log("Error Message is: "+errorMessage);
    // expect(errorMessage).toBe("Invalid credentials");
    expect(errorMessage.includes("Invalid")).toBeTruthy();
    expect(errorMessage==="Invalid credentials").toBeTruthy(); //=== is used for exact match matches the complete string including spaces and case sensitivity and data type
})  