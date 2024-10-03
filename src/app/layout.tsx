import { Metadata } from 'next'
import { Inter } from 'next/font/google';
import "./globals.css";
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Abdul Rehman | Portfolio',
  description: 'A portfolio website showcasing my work as a frontend developer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className='bg-black'>{children}</body>
    </html>
  )
}