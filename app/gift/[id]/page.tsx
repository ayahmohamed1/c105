import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import giftData from '@/lib/giftData'
import GiftClient from '@/components/GiftClient'

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const data = giftData[params.id.toLowerCase()]
  if (!data) return { title: 'Gift Not Found' }
  
  return {
    title: `For ${data.receiverName} 🤍`,
    description: `A special message for ${data.receiverName} 🤍`,
    openGraph: {
      title: `For ${data.receiverName} 🤍`,
      description: `A special message for ${data.receiverName} 🤍`,
      url: `https://agiftforyouuu.vercel.app/gift/${params.id.toLowerCase()}`,
      siteName: 'Special Gift',
      type: 'website',
      images: [
        {
          url: 'https://agiftforyouuu.vercel.app/images/og-cat.jpg',
          secureUrl: 'https://agiftforyouuu.vercel.app/images/og-cat.jpg',
          width: 1200,
          height: 630,
          type: 'image/jpeg',
          alt: `Cute Cat 🐱🤍`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `For ${data.receiverName} 🤍`,
      description: `A special message for ${data.receiverName} 🤍`,
      images: ['https://agiftforyouuu.vercel.app/images/og-cat.jpg'],
    },
  }
}

export default function GiftPage({ params }: { params: { id: string } }) {
  const data = giftData[params.id.toLowerCase()]
  if (!data) return notFound()
  
  return <GiftClient data={data} />
}
