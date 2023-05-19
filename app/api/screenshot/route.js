const puppeteer = require('puppeteer');

export async function GET(req, res) {

    let browser;

    try {
        browser = await puppeteer.launch({headless: 'new'});
        const page = await browser.newPage();
        await page.goto('https://marat-faizerakhmanov.vercel.app', {waitUntil: 'networkidle2'});
        const pdfBuffer = await page.pdf({format: 'A4'});

        return new Response(pdfBuffer);
    } catch (error) {
        return new Response('Something went wrong');
    } finally {
        if (browser) {
            await browser.close();
        }
    }
};
