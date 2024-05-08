import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
...
...
...
<html lang="en">
      <body className={inter.className}>{children}</body>
    </html>

{/* we're passing down Inter to the body so that we can use it in our pages*/}