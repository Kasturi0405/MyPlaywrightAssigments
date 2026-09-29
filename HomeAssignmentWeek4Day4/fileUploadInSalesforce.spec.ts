import { test, expect } from "@playwright/test"

test.use(
    {
        storageState: 'Data/salesforcelogin.json'
    }
)

test('Upload file on the Salesforce application', async ({ page }) => {
    await page.goto("https://orgfarm-b2b686b1dc-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome")
    await page.waitForLoadState('domcontentloaded')
    const title = await page.title()
    console.log("Page title: " + title);
    await page.locator('button[title="App Launcher"]').click()
    await page.locator("//button[.='View All']").click()
    await page.locator("//input[@type='search' and contains(@placeholder,'Search apps or items...')]").fill("Accounts")
    await page.locator("//mark[.='Accounts']").click()
    await page.waitForLoadState('domcontentloaded')
    await page.getByRole('button', { name: 'New' }).click()
    await page.getByRole('textbox', { name: 'Account Name' }).fill("XYZ account")
    await page.getByRole('combobox', { name: 'Rating' }).click()
    await page.locator("//*[@data-value='Warm']").click()
    await page.getByRole('combobox', { name: 'Type' }).click()
    await page.locator("//*[@data-value='Prospect']").click()
    await page.getByRole('combobox', { name: 'Ownership' }).click()
    await page.locator("//*[@data-value='Public']").click()
    await page.getByRole('combobox', { name: 'Industry' }).click()
    await page.locator("//*[@data-value='Banking']").click()
    await page.getByRole('button', { name: 'Save' }).last().click()
    expect(await page.locator('//span[contains(.,"was created.")]')).toBeTruthy()
    const totalHeight = await page.evaluate(() => document.body.scrollHeight);
    console.log("TOTAL HEIGHT ",totalHeight)
    // Scroll mouse wheel vertically down to the bottom
    await page.mouse.wheel(0, totalHeight);
    await page.waitForLoadState('domcontentloaded')
    await page.locator("//a[@title='Upload Files']").scrollIntoViewIfNeeded()
    let fUpload = page.locator("//input[@name='fileInput']")
    fUpload.setInputFiles('Data/LocatorsHomeWork.pdf')
    await page.getByRole('button', { name: 'Done' }).last().isVisible()
    await page.getByRole('button', { name: 'Done' }).last().click()
    expect(await page.locator("//span[contains(@class,'itemTitle')]")).toContainText('LocatorsHomeWork')
})