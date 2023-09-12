import 'bootstrap/dist/css/bootstrap.css'
import './styles/css/globals.css'
import Head from "next/head";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './components/FooterComponent'
import Navbar from './components/NavbarComponent'


const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'loT Monitor',
  description: 'Here you can look stats about loT',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={inter.className}>
        <Navbar/>
          {children}
        <Footer/>
      </body>
    </html>
  )
}
