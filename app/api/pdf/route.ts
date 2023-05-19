import puppeteer from 'puppeteer'

export async function GET(request: Request) {
  // console.log('request',request)

  const browser = await puppeteer.launch({headless: 'new'});
  const page = await browser.newPage();
  await page.goto('https://marat-faizerakhmanov.vercel.app', {waitUntil: 'networkidle2'});
  const pdfBuffer = await page.pdf({format: 'A4'});

  await browser.close();
  return new Response(pdfBuffer, {
    status: 200,
  });
}
