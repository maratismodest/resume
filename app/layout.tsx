import './globals.css'
import type {Metadata} from "next";
import {Inter} from 'next/font/google'
import Link from "next/link";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
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
    <header className='sticky top-0 z-10 bg-white border-b'>
      <nav className='flex justify-around'>
        <a href='https://www.linkedin.com/in/marat-faizerakhmanov'>My Linkedin</a>
        <a href='https://github.com/maratismodest'>My Github</a>
        <a href='https://t.me/maratfaizer'>My Telegram</a>
      </nav>
    </header>
    <main>
      {children}
    </main>
    <footer className='flex justify-center'>
      <Link href='#'>Scroll on Top</Link>
    </footer>
    </body>
    </html>
  )
}
