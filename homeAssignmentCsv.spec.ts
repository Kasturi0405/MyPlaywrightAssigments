import { test, expect } from "@playwright/test"

import { parse } from "csv-parse/sync"

import fs from 'fs'

let value: any[] = parse(fs.readFileSync('Data/lflogin.csv', 'utf-8'), { columns: true, skip_empty_lines: true })

for (let details of value) {

    test(`Login leaftaps ${details.tcid}`, async ({ page }) => {

        await page.goto('https://leaftaps.com/opentaps/control/main')

        await page.locator('#username').fill(details.username)

        await page.locator("#password").fill(details.password)

        await page.locator('.decorativeSubmit').click()

        await page.waitForLoadState('domcontentloaded')

        expect(await page).toHaveTitle('Leaftaps - TestLeaf Automation Platform')
    })

}