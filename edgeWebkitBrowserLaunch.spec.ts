import { expect, test, chromium, webkit } from '@playwright/test';

test('navigate to RedBus in Edge', async () => {
    const edge = await chromium.launch({
        channel: 'msedge',
        headless: false,
    });

    const edgeContext = await edge.newContext();
    const edgePage = await edgeContext.newPage();
    await edgePage.goto('https://www.redbus.in/');
    const title = await edgePage.title()
    const url = await edgePage.url()
    console.log('Edge Browser Launched and navigated to RedBus ' + title + ' ' + url);

});

test('navigate to flipkart in Webkit', async () => {
    const webkitBrowser = await webkit.launch({
        headless: false,
    });

    const webkitContext = await webkitBrowser.newContext();

    const webkitPage = await webkitContext.newPage();
    await webkitPage.goto('https://www.flipkart.com/');
    const title = await webkitPage.title()
    const url = await webkitPage.url()
    console.log('Webkit Browser Launched and navigated to Flipkart ' + title + ' ' + url);

});