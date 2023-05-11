import { test, expect } from "@playwright/test";

test("Open home page and verify title", async ({page}) => {
    await page.goto("https://www.fifa.com/fifaplus/en/home");

    await expect(page).toHaveTitle('FIFA+');
})

test("Verify logo is visible and has alt title", async ({page}) => {
    await page.goto("https://www.fifa.com/fifaplus/en/home");
    
    const logo = page.locator('[href="https://www.fifa.com/fifaplus/en/home?intcmp=(p_fifaplus)_(c_webheader-main)_(sc_logo)_(ssc_)_(da_04052023)_(l_en)"] img');
    await expect(logo).toBeVisible();
    await expect(logo).toHaveAttribute('title', 'FIFA Plus Logo')
})

test("Verify navigation links", async ({page}) => {
    const expectedLinks = [
     "FIFA U-20 WORLD CUP 2023™",
     "FIFA WOMEN'S WORLD CUP 2023™",
     "FIFA BEACH SOCCER WORLD CUP 2023™",
      "OTHER FIFA TOURNAMENTS",
      "FIFA WORLD CUP 2026™",
      "ORIGINALS",
      "ARCHIVE",
      "MATCH CENTRE",
       "LIVE STREAMING",
      "HIGHLIGHTS",
      "PLAY ZONE",
      "FIVES",
      "GLOBAL GOALSCORER",
      "WHO AM I?",
       "HEAD TO HEAD",
      "TRIVIA",
      "FIFA STORE",
      "BUY TICKETS",
      "FIFA+ COLLECT",
      "NEWS",
    ];
    await page.goto("https://www.fifa.com/fifaplus/en/home");
    
    const navLinks = page.locator('#mainLinksID a')

    await expect(navLinks.first()).toBeVisible();
    expect( await navLinks.allInnerTexts()).toEqual(expectedLinks)
})