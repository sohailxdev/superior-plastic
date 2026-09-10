import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Superior Plastic Enterprises | PVC Products Manufacturer in Bhiwandi',
  description: 'PVC seat cover, handle cover, handle muff, suit cover and packaging bag manufacturer in Bhiwandi, Maharashtra. Custom sizes, colors, logo printing and bulk orders across India.',
  generator: 'v0.app',
  keywords: ['PVC seat cover manufacturer', 'PVC handle cover manufacturer', 'bike handle cover manufacturer', 'handle muff manufacturer', 'PVC packaging bags manufacturer', 'PVC suit cover manufacturer', 'PVC products manufacturer in Bhiwandi', 'PVC products manufacturer in Maharashtra'],
  openGraph: {
    title: 'Superior Plastic Enterprises | Protection that moves with your business',
    description: 'Reliable PVC products for mobility, retail and industrial brands.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f5f8fc',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body>
    </html>
  )
}
