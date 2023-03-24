import '@styles/globals.css'
import { Header } from '@components/header/Header'

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <head>
        <title>My firs app with Next 13</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
