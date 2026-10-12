import type { Metadata, Viewport } from 'next'
import './globals.css'
import { siteConfig } from '@/lib/site-config'
import { LanguageProvider } from '@/context/LanguageContext'

export const metadata: Metadata = {
  metadataBase: new URL('https://danisaji58.github.io'),
  title: `${siteConfig.personal.fullName} | ${siteConfig.personal.title}`,
  description: `${siteConfig.personal.supportingText} Specializing in responsive web design, interactive experiences, and clean code.`,
  keywords: [
    'Nadhif Javier Aji Daniswara',
    'Nadhif Javier',
    'Frontend Developer',
    'SMK Telkom Malang',
    'Web Developer Portfolio',
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Creative Developer',
    'Three.js',
  ],
  authors: [{ name: siteConfig.personal.fullName, url: siteConfig.socials.github }],
  creator: siteConfig.personal.fullName,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://danisaji58.github.io',
    title: `${siteConfig.personal.fullName} — ${siteConfig.personal.title}`,
    description: siteConfig.personal.supportingText,
    siteName: `${siteConfig.personal.shortName} Portfolio`,
    images: [
      {
        url: '/images/profile.png',
        width: 800,
        height: 800,
        alt: `${siteConfig.personal.fullName} Profile`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.personal.fullName} — ${siteConfig.personal.title}`,
    description: siteConfig.personal.supportingText,
    images: ['/images/profile.png'],
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#06080e',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#06080e] text-[#f1f5f9] selection:bg-cyan-500/20 selection:text-white">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
