import { test, expect } from "@playwright/test";
import { text } from "node:stream/consumers";

test('verify the displayed text based on actions using Playwright on the given application', async ({ page }) => {
    await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm')
    //Handle alert
    page.on('dialog', async (a) => {
        console.log(a.type())
        await a.accept()
    })
    let singleframeRef = page.frameLocator('#iframeResult')
    singleframeRef.locator("//button[.='Try it']").click()
    await page.waitForTimeout(6000)
    const text = await singleframeRef.locator('#demo').innerText()
    //Validating the text displayed
    expect(text).toBe('You pressed OK!')

})