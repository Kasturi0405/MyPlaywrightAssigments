import {test, expect} from "@playwright/test"
import path from 'path'

test('to upload multiple files in leafground',async ({page}) => {
await page.goto('https://www.leafground.com/file.xhtml')

let fupload=page.locator('(//input[@type="file"])[2]')

await fupload.setInputFiles('Data/sample1.png')
await fupload.setInputFiles('Data/sample2.png')

//Retry assertion
await expect(page.locator('[class="ui-fileupload-filename"]').nth(1)).toContainText('sample1')
await expect(page.locator('[class="ui-fileupload-filename"]').nth(2)).toContainText('sample2')
})
