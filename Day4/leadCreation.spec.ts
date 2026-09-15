import test from "@playwright/test";

test('Create a new lead in leaftaps application', async ({ page }) => {
    await page.goto('https://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill('democsr2')
    await page.locator('#password').fill('crmsfa')
    await page.locator('.decorativeSubmit').click()
    await page.locator('[for="crmsfa"]').click()
    await page.locator('text="Leads"').click()
    await page.locator('a[href="/crmsfa/control/createLeadForm"]').click()
    await page.locator('#createLeadForm_companyName').fill('XYZ')
    await page.locator('#createLeadForm_firstName').fill('fName')
    await page.locator('#createLeadForm_lastName').fill('lName')
    /* const source = await page.locator('#createLeadForm_dataSourceId')
     const options = await source.locator('option').all()
     //Traversing the dropdown options and printing them on the console
     for (const option of options) {
         const optionText = await option.innerText()
         console.log("Option present: ", optionText)
     } */

    //other way of printing the dropdown options
    const sourceOptions = await page.locator('#createLeadForm_dataSourceId option')
    const optionsCount = await sourceOptions.count()
    //Traversing the dropdown options and printing them on the console
    for (let i = 0; i < optionsCount; i++) {
        const optionText = await sourceOptions.nth(i).innerText()
        console.log("Option present: ", optionText)
    }
    await page.locator('#createLeadForm_generalProfTitle').fill('ms')
    await page.locator('#createLeadForm_personalTitle').fill('xxx')
    await page.locator('#createLeadForm_annualRevenue').fill('4000000')
    await page.locator('#createLeadForm_departmentName').fill('HR')
    await page.locator('#createLeadForm_primaryPhoneNumber').fill("8452103697")
    await page.locator('[value="Create Lead"]').click()
    //Print the page title once lead created
    console.log(await page.title() + " title")
})

//Assignment 2
test.only('Edit lead in leaftaps application', async ({ page }) => {
    await page.goto('https://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill('democsr2')
    await page.locator('#password').fill('crmsfa')
    await page.locator('.decorativeSubmit').click()
    await page.locator('[for="crmsfa"]').click()
    await page.locator('text="Leads"').click()
    await page.locator('a[href="/crmsfa/control/createLeadForm"]').click()
    await page.locator('#createLeadForm_companyName').fill('XYZ')
    await page.locator('#createLeadForm_firstName').fill('fName')
    await page.locator('#createLeadForm_lastName').fill('lName')
    await page.locator('#createLeadForm_generalProfTitle').fill('ms')
    await page.locator('#createLeadForm_personalTitle').fill('xxx')
    await page.locator('#createLeadForm_annualRevenue').fill('4000000')
    await page.locator('#createLeadForm_departmentName').fill('HR')
    await page.locator('#createLeadForm_primaryPhoneNumber').fill("8452103697")
    await page.locator('[value="Create Lead"]').click()
    //Print the page title once lead created
    console.log(await page.title() + " title")
    await page.locator("//a[.='Edit']").click()
    await page.locator("#updateLeadForm_companyName").fill("ABC")
    await page.locator("[value='Update']").click()
    await page.locator("//a[.='Delete']").click()
})