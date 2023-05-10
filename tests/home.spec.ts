import { test, expect } from "@playwright/test";

test("Open home page and verify title", async ({page}) => {
    await page.goto("https://www.fifa.com/fifaplus/en/home");

    await expect(page).toHaveTitle('FIFA+');
})

test("Verify logo is visible and has alt title", async ({page}) => {
    await page.goto("https://www.fifa.com/fifaplus/en/home");
    
    const logo = page.locator('[href="/fifaplus/en/home] img');
    await expect(logo).toBeVisible();
    await expect(logo).toHaveAttribute('title', 'Qatar 2022')
})