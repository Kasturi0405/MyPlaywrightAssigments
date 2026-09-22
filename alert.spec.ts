import test from "@playwright/test";

test("Automate a JavaScript prompt dialog using Playwright and enter the value Playwright when the prompt is displayed", async ({ page }) => {

    //use event listener to handle the alert

    page.on('dialog', async (alert) => {

        let alertType = alert.type()
        console.log(alertType);

        let alertMessage = alert.message()
        console.log(alertMessage);

        if (alertType === "confirm") {

            await alert.accept()

        } else if (alertType === "alert") {

            await alert.accept()

        } else {

            await alert.accept("Playwright")
        }

    })

    //by default pw automatically cancels

    await page.goto('https://www.leafground.com/alert.xhtml')

    //alert-ok
    await page.locator('//span[text()="Show"]').first().click()

    //confirm-ok and cancel
    await page.locator('//span[text()="Show"]').nth(1).click()

    //prompt-ok, cancel and input text box
    await page.locator('//span[text()="Show"]').nth(4).click()
})