import '@styles/globals.css'
import { Header } from '@components/header/Header'
import { fontSpaceGrotesk } from './font'

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <head>
        <title>My firs app with Next 13</title>
      </head>
      <body className={fontSpaceGrotesk.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
