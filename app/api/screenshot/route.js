const puppeteer = require('puppeteer');

export async function GET(req, res) {

    let browser;

    try {
        const browser = await puppeteer.launch({headless: 'new'});
        const page = await browser.newPage();
        await page.goto('https://marat-faizerakhmanov.vercel.app', {waitUntil: 'networkidle2'});
        const pdfBuffer = await page.pdf({format: 'A4'});

        return new Response(pdfBuffer);
    } catch (error) {
        res.status(500).json({error: error.message});
    } finally {
        if (browser) {
            await browser.close();
        }
    }
};
