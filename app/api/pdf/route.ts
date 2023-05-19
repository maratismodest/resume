import {NextRequest, NextResponse} from "next/server";
// import puppeteer from 'puppeteer'

export async function GET(req: NextRequest, res: NextResponse) {

  // const browser = await puppeteer.launch({headless: 'new'})
  // const page = await browser.newPage()
  //
  // await page.goto('http://localhost:3000')
  // await page.emulateMediaType('screen')
  //
  // const pdfBuffer = await page.pdf({format: 'A4'})
  // await browser.close()
  // return new Response(pdfBuffer, {
  //   status: 200,
  // });
  return new Response('Hello World!', {
    status: 200,
  });
}
