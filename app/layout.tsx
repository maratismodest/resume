import './globals.css'
import Header from "@/app/components/Header";
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
    <Header />
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
