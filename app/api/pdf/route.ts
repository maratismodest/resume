import {NextRequest, NextResponse} from "next/server";
import puppeteer from 'puppeteer'

export async function GET(req: NextRequest, res: NextResponse) {
  // console.log('req.url', req.url)
  if (req.url) {
    const browser = await puppeteer.launch({headless: 'new'})
    const page = await browser.newPage()

    await page.goto('https://marat-faizerakhmanov.vercel.app')
    await page.emulateMediaType('screen')

    const pdfBuffer = await page.pdf({format: 'A4'})
    await browser.close()
    return new Response(pdfBuffer, {
      status: 200,
    });
  }

  return new Response('Hello Pdf!', {
    status: 200,
  });
}
