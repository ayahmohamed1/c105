import type { Metadata } from 'next'
import giftData from '@/lib/giftData'
import GiftClient from '@/components/GiftClient'

export const metadata: Metadata = {
  metadataBase: new URL('https://agiftforyouuu.vercel.app'),
  title: 'For Heba 🤍',
  description: 'A special message for Heba 🤍',
  openGraph: {
    title: 'For Heba 🤍',
    description: 'A special message for Heba 🤍',
    url: 'https://agiftforyouuu.vercel.app',
    siteName: 'Special Gift',
    type: 'website',
    images: [
      {
        url: 'https://agiftforyouuu.vercel.app/images/og-cat.jpg',
        secureUrl: 'https://agiftforyouuu.vercel.app/images/og-cat.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Cute Cat 🐱🤍',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'For Heba 🤍',
    description: 'A special message for Heba 🤍',
    images: ['https://agiftforyouuu.vercel.app/images/og-cat.jpg'],
  },
}

export default function Home() {
  const data = giftData.heba || giftData.amir
  return <GiftClient data={data} />
}