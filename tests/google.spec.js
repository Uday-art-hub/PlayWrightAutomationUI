import {expect, test} from '@playwright/test';

// const {expect, test}= require('@playwright/test');

test("My Application Title", async({page})=>{
    await page.goto("https://www.google.com/");
    const url=await page.url();
    console.log(url);
    expect(url).toBe("https://www.google.com/");
    const title=await page.title();
    console.log(title);
    expect(title).toBe("Google");
})