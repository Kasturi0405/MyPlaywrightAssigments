import test, { expect } from "@playwright/test";


test('login to the Salesforce application', async ({ page }) => {
    await page.goto('https://login.salesforce.com/?locale=in')
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('input[value="Log In"]').click()
    await page.locator('#password').fill("TestLeaf@2025")
    await page.locator('input[value="Log In"]').click()
    const title = await page.title()
    console.log("Page title: " + title);
});

//Assigment 1
test('Create lead on the Salesforce application', async ({ page }) => {
    await page.goto('https://login.salesforce.com/?locale=in')
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('input[value="Log In"]').click()
    await page.locator('#password').fill("TestLeaf@2025")
    await page.locator('input[value="Log In"]').click()
    const title = await page.title()
    console.log("Page title: " + title);
    await page.locator('button[title="App Launcher"]').click()
    await page.locator("//button[.='View All']").click()
    await page.locator("//input[@type='search' and contains(@placeholder,'Search apps or items...')]").fill("Sales")
    await page.locator("//p[contains(@title,'Manage your sales process')]").click()
    await page.locator("//a/span[.='Leads']").click()
    await page.locator("div[title='New']").click()
    await page.locator("button[aria-label='Salutation']").click()
    await page.locator("[data-value='Ms.']").click()
    await page.locator("[name='lastName']").fill("XYZ")
    await page.locator("[name='Company']").fill("testleaf")
    await page.locator("[name='SaveEdit']").click()
    //Print the new lead name
    console.log(await page.locator("[slot='primaryField']").innerText())
    await page.locator("[name='Delete']").click()
    await page.locator("button[title='Delete']").click()
});

//Assignment 3
test('Create individual on the Salesforce application', async ({ page }) => {
    await page.goto('https://login.salesforce.com/?locale=in')
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('input[value="Log In"]').click()
    await page.locator('#password').fill("TestLeaf@2025")
    await page.locator('input[value="Log In"]').click()
    const title = await page.title()
    console.log("Page title: " + title);
    await page.locator('button[title="App Launcher"]').click()
    await page.locator("//button[.='View All']").click()
    await page.locator("//input[@type='search' and contains(@placeholder,'Search apps or items...')]").fill("Individuals")
    await page.locator("//mark[contains(text(),'Individual')]").click()
    await page.locator("//a[@title='Individuals']/following::one-app-nav-bar-item-dropdown//a[@aria-haspopup]").click()
    await page.locator("(//span[.='New Individual'])[1]").click()
    await page.locator(".lastName").fill("XYZ")
    await page.locator("//span[.='Save']/parent::button").click()
    //Print the new lead name
    console.log(await page.locator("//h1//span[@class='uiOutputText']").innerText())
    await page.locator("a[title='Delete']").click()
    await page.locator("button[title='Delete']").click()
});

//Assigment 4
test.only('Edit individual on the Salesforce application', async ({ page }) => {
    const value = 'Individuals'
    const lname = 'xyz'
    const fname = 'fname'
    await page.goto('https://login.salesforce.com/?locale=in')
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('input[value="Log In"]').click()
    await page.locator('#password').fill("TestLeaf@2025")
    await page.locator('input[value="Log In"]').click()
    const title = await page.title()
    console.log("Page title: " + title);
    await page.locator('button[title="App Launcher"]').click()
    await page.locator("//button[.='View All']").click()
    await page.locator("//input[@type='search' and contains(@placeholder,'Search apps or items...')]").fill(value)
    await page.locator("//mark[contains(text(),'Individual')]").click()
    await page.locator("//a[@title='Individuals']/following::one-app-nav-bar-item-dropdown//a[@aria-haspopup]").click()
    await page.locator("(//span[.='New Individual'])[1]").click()
    await page.locator(".lastName").fill(lname)
    await page.locator("//span[.='Save']/parent::button").click()
    await page.locator(".slds-notify__close").click()
    await expect(page.locator('//div[@data-key="success"]')).toBeHidden()
    //Print the new Individual name
    console.log("Output " + await page.locator("//h1//span[@class='uiOutputText']").innerText())
    await page.locator("//a[@title='Individuals']").click()
    await page.locator("[name='Individual-search-input']").fill(lname)
    await page.locator("[name='Individual-search-input']").press('Enter')
    //Checking if search is completed successfully
    console.log(await page.locator("//span[contains(.,'1 item') and @aria-live]").innerText())
    //await page.waitForTimeout(10000)
    await page.locator("//span[.='Show Actions']/parent::button").click()
    await page.waitForTimeout(10000)
    await page.locator("//div[contains(@class,'visible')]//a[@title='Edit']").press('Enter')
    await page.locator("(//a[@class='select'])[1]").click()
    await page.locator("a[title='Mr.']").click()
    await page.locator("input[placeholder='First Name']").fill(fname)
    await page.locator("//span[.='Save']/parent::button").click()
    await page.locator(".slds-notify__close").click()
    await expect(page.locator('//div[@data-key="success"]')).toBeHidden()
    //Print the edited individual name
    const name = await page.locator("(//a[@class='slds-truncate'])[1]").innerText()
    console.log("Name displayed is ", name)
    console.log("Name expected is ", fname + " " + lname)
    console.log("Name is edited as expected: " + (name === fname + " " + lname))
    //Cleaning up the created inividual
    await page.reload()
    await page.locator("[name='Individual-search-input']").fill(lname)
    await page.locator("[name='Individual-search-input']").press('Enter')
    //Checking if search is completed successfully
    console.log(await page.locator("//span[contains(.,'1 item') and @aria-live]").innerText())
    //await page.waitForTimeout(10000)
    await page.locator("//span[.='Show Actions']/parent::button").click()
    await page.waitForTimeout(10000)
    await page.locator("a[title='Delete']").click()
    await page.locator("button[title='Delete']").click()
});