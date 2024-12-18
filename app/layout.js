import "./globals.css";
import Providers from "./providers";
import ThemeSwitcher from "./ThemeSwitcher";
import { Space_Grotesk, Space_Mono } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'auto',
  weight: ['300', '400', '500','600', '700'],
  style: ['normal'],
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
})

export const metadata = {
  metadataBase: new URL('https://studionexa.in'),
  title: "Studio Nexa | Web Development, UI/UX Design, App Development & Branding",
  description: "Studio Nexa - A creative digital agency specializing in web development, UI/UX design, mobile app development, and branding solutions. Transform your digital presence with our innovative designs and cutting-edge development services.",
  keywords: "Studio Nexa, web development, UI/UX design, app development, branding, digital agency, website design, mobile apps, brand identity, user experience, user interface design, digital marketing, responsive design, custom web development, mobile-first design",
  authors: [{ name: 'Studio Nexa Team' }],
  generator: 'Next.js',
  applicationName: 'Studio Nexa',
  referrer: 'origin-when-cross-origin',
  creator: 'Studio Nexa',
  publisher: 'Studio Nexa',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Studio Nexa | Digital Design & Development Agency",
    description: "Transform your digital presence with Studio Nexa. Expert web development, UI/UX design, app development, and branding solutions.",
    url: 'https://studionexa.in',
    siteName: 'Studio Nexa',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Studio Nexa - Digital Agency',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio Nexa | Digital Design & Development Agency',
    description: 'Transform your digital presence with Studio Nexa. Expert web development, UI/UX design, app development, and branding solutions.',
    creator: '@StudioNexa',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
      { url: '/apple-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/apple-icon-114x114.png', sizes: '114x114', type: 'image/png' },
    ],
    other: [
      { rel: 'apple-touch-icon-precomposed', url: '/apple-touch-icon-precomposed.png' },
    ],
  },
  manifest: '/manifest.json',
  verification: {
    google: 'verification_token',
    yandex: 'yandex_verification_token',
    bing: 'bing_verification_token',
    yahoo: 'yahoo_verification_token',
  },
  category: 'technology',
  other: {
    'facebook-domain-verification': 'facebook_domain_verification_token',
    'theme-color': '#ffffff',
    'msapplication-TileColor': '#ffffff',
    'msapplication-config': '/browserconfig.xml',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.className} ${spaceMono.variable}`}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
