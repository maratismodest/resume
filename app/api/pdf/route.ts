import puppeteer from "puppeteer";

export async function GET() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto('https://marat-faizerakhmanov.vercel.app')
  await page.emulateMediaType('screen')

  // Create PDF Buffer
  try {
    const buffer = await page.pdf({format: 'a4'})

    // Return pdf buffer to caller.
    return new Response(buffer)
  }
  catch (e) {
    console.log('e',e)
  }
  finally {
    // Close browser **after** we returned the PDF to the caller.
    await browser.close()
  }

}

