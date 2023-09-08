import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Chan Tse',
  description:
    'Chan tse is a software engineer who is dedicated to building innovative and accessible products for the web.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="keywords" content="HTML, CSS, JavaScript"></meta>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
