import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Virtuální Asistenti - Získejte zpět 20+ hodin týdně',
  description: 'Profesionální virtuální asistenti pro podnikatele a freelancery. Ušetříte až 70% nákladů a získáte 20+ hodin týdně navíc. Garance spokojenosti.',
  keywords: 'virtuální asistent, VA, administrativa, e-maily, podnikání, freelancer, produktivita',
  openGraph: {
    title: 'Virtuální Asistenti - Získejte zpět 20+ hodin týdně',
    description: 'Profesionální virtuální asistenti pro podnikatele a freelancery. Ušetříte až 70% nákladů a získáte 20+ hodin týdně navíc.',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body className={inter.className}>{children}</body>
    </html>
  )
}