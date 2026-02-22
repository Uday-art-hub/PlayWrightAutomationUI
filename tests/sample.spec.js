const {test, expect} = require('@playwright/test');

test("My First Test", async ({page})=>{
    expect(1).toBe(1);
})

// test("My Second Test", async ({page})=>{
//     expect(2).toBe(3);
// })

test("My Third Test", async ({page})=>{
    expect(3).toBe(3);
})


test.skip("My Fourth Test", async ({page})=>{
    expect("Uday Kiran").toContain("Uday");
    expect(true).toBeTruthy();
})

test("My Fifth Test", async ({page})=>{
    expect(false).toBeFalsy();
})


test("My Sixth Test",async({page})=>{
    expect("Uday Kiran".includes("Kiran")).toBeTruthy();
})