import './globals.css'
import {Inter} from 'next/font/google'
import Link from "next/link";

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'Marat Faizerakhmanov',
  description: 'Frontend Developer specializing in React and Next.js',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <header>
      <Link href='#'>Header</Link>
    </header>
    <main>
      {children}
    </main>
    <footer>
      <Link href='#'>Footer</Link>
    </footer>
    </body>
    </html>
  )
}
