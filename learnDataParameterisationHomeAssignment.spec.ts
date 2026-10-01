import test from '@playwright/test'

import dotenv from 'dotenv'

import locators from '../../../Data/lfLocators.json'

import { parse } from "csv-parse/sync"

import fs from 'fs'

let value: any[] = parse(fs.readFileSync('Data/dropdownValues.csv', 'utf-8'), { columns: true, skip_empty_lines: true })
let filename = process.env.envfile || 'qa'
dotenv.config({ path: `Data/${filename}.env` })

let URL = process.env.lf_url as string
let Username = process.env.lf_username as string
let Password = process.env.lf_password as string
for (let details of value) {
    test('Create a new lead in leaftaps application using data parameterization', async ({ page }) => {
        await page.goto(URL)
        await page.locator(locators.username).fill(Username)
        await page.locator(locators.password).fill(Password)
        await page.locator(locators.loginButton).click()
        await page.locator('[for="crmsfa"]').click()
        await page.locator('text="Leads"').click()
        await page.locator('a[href="/crmsfa/control/createLeadForm"]').click()
        await page.locator('#createLeadForm_companyName').fill('XYZ')
        await page.locator('#createLeadForm_firstName').fill('fName')
        await page.locator('#createLeadForm_lastName').fill('lName')
        const source = await page.locator('#createLeadForm_dataSourceId')
        source.selectOption({ label: details.source })
        const marketingCampaignOptions = await page.locator('#createLeadForm_marketingCampaignId option')
        const optionsCount = await marketingCampaignOptions.count()
        //Traversing the dropdown options and printing them on the console
        for (let i = 0; i < optionsCount; i++) {
            const optionText = await marketingCampaignOptions.nth(i).innerText()
            console.log("Option present: ", optionText)
        }
        const marketingCampaign = await page.locator('#createLeadForm_marketingCampaignId')
        marketingCampaign.selectOption({ label: details.marketingCampaign })
        let indexNum = Number(details.industry)
        console.log("Index ", indexNum)
        console.log(typeof indexNum)
        await page.locator('#createLeadForm_industryEnumId').selectOption({ index: indexNum })
        await page.locator('#createLeadForm_currencyUomId').selectOption(details.currency)
        const stateOptions = await page.locator('#createLeadForm_generalStateProvinceGeoId option')
        const stateoptionsCount = await stateOptions.count()
        //Traversing the dropdown options and printing them on the console
        for (let i = 0; i < stateoptionsCount; i++) {
            const optionText = await stateOptions.nth(i).innerText()
            console.log("Option present: ", optionText)
        }
        await page.locator('#createLeadForm_generalStateProvinceGeoId').selectOption(details.state)
        await page.locator('[value="Create Lead"]').click()
        //Print the page title once lead created
        console.log(await page.title() + " title")
    })
}