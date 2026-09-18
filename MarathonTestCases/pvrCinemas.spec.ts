import { test, expect } from "@playwright/test";


test("Verify dynamic movie ticket booking flow in PVR Cinemas website", async ({ page }) => {
    await page.goto("https://www.pvrcinemas.com/")
    await page.waitForLoadState('domcontentloaded')
    await page.locator('span').filter({ hasText: 'Chennai' }).click()
    await page.getByText('Cinema', { exact: true }).click()
    const cinema = 'INOX Chennai Citi Centre,Dr. R. K. Salai Chennai'
    const date = 'Today'
    const movie = 'RESIDENT EVIL'
   // const time = "02:00 PM"
    await page.getByRole('button', { name: 'Select Cinema' }).click()
    await page.getByText(cinema).click()
    await page.getByRole('listbox').getByText(date).click()
    await page.getByRole('listbox').getByText(movie).click()
    //await page.getByRole('listbox').getByText(time).click()
    await page.locator("//span[contains(.,'Tamil')]/parent::li[not(contains(@class,'disabled'))]").click()
    await page.getByRole('button', { name: 'Submit' }).click()
    await page.getByRole('button', { name: 'Accept' }).click()
    await page.waitForLoadState('domcontentloaded')
    await page.getByRole('button', { name: 'Accept' }).click()
    const seatNo = await page.locator(".seat-current-pvr").first().getAttribute('id')
    await page.locator(".seat-current-pvr").first().click()
    console.log("Seat no:", seatNo)
    const selectedSeatNo = await page.locator("//div[@class='seat-number']/p").innerText()
    console.log("Selected seat no: ", selectedSeatNo)
    console.log(await page.locator('.grand-amount').innerText())
    console.log(await page.title())
    expect(await page.locator("//h5").innerText()).toEqual(movie)
})