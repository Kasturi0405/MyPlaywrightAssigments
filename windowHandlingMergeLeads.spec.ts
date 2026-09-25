import { test, expect } from "@playwright/test"

test('concurrent apporach', async ({ page, context }) => {

    await page.goto('https://leaftaps.com/opentaps/control/main')
    await page.getByLabel('Username').fill('Demosalesmanager')
    await page.getByRole('textbox', { name: 'Password' }).fill('crmsfa')
    await page.getByRole('button').click()
    await page.getByText('CRM/SFA').click()
    await page.getByRole('link', { name: 'Leads' }).click()
    await page.getByRole('link', { name: 'Merge Leads' }).click()
    await page.waitForLoadState('domcontentloaded')
    //Handling windows
    let [newPage] = await Promise.all([context.waitForEvent('page'), page.getByAltText('Lookup').first().click()])
    let allPages = newPage.context().pages()
    console.log(await allPages[1].title())
    await allPages[1].locator('.linktext').first().click()
    let [newPage1] = await Promise.all([context.waitForEvent('page'), page.getByAltText('Lookup').last().click()])
    allPages = newPage1.context().pages()
    console.log(await allPages[1].title())
    await allPages[1].locator('.linktext').nth(5).click()
    await page.getByRole('link', { name: 'Merge', exact: true }).click()
    //Event listener for alert
    page.on('dialog', async (alert1) => {

        let alertType = alert1.type()
        console.log(alertType);

        let alertMessage = alert1.message()
        console.log(alertMessage);
        await alert1.accept()
    })

    await page.getByRole('link', { name: 'Merge', exact: true }).click()
    await page.waitForLoadState('domcontentloaded')
    await expect(page).toHaveTitle('View Lead | opentaps CRM')

})