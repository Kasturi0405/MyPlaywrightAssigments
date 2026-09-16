import { test, expect } from "@playwright/test";

test('Input and assertion practice on leaftap application', async ({ page }) => {

    await page.goto('https://leafground.com/input.xhtml')
    await expect(page.locator("(//h5[.='Verify if text box is disabled']//following::input)[1]")).toBeDisabled()
    const nameTextBox = page.locator("(//h5[.='Type your name']//following::input)[1]")
    await expect(nameTextBox).toBeEditable({ timeout: 2000 })
    await nameTextBox.fill("Kasturi", { timeout: 2000 })
    await expect.soft(page.locator("#j_idt106 input[type='text']")).toBeDisabled()
    await page.locator("//h5[.='Retrieve the typed text.']/preceding::input[1]").fill("")
    await page.locator("//h5[.='Retrieve the typed text.']/preceding::input[1]").fill("Playwright Learning")
})