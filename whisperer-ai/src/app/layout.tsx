import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
