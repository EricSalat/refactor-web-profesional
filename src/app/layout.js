import './globals.css'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Èric Salat - Desarrollador Frontend',
  description: 'Web profesional - portfolio de Èric Salat Badia. Desarrollador Frontend',
  authors: [{ name: 'Èric Salat Badia' }],
  themeColor: '#64ffda',
}

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="es">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  )
}
