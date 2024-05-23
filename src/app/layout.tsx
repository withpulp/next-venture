import "@/styles/tailwind.css"

import type { Metadata } from "next"
import { Chakra_Petch, Noto_Serif } from "next/font/google"
import { type ReactNode, Suspense } from "react"

import { Analytics, Footer, Providers } from "@/components"
import { app, brandColors } from "@/config"

// App Fonts
// - Ref: https://nextjs.org/docs/app/building-your-application/optimizing/fonts

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
  variable: "--font-chakra-petch",
  preload: true,
})

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-serif",
  preload: true,
})

const fontVariables = `${chakraPetch.variable} ${notoSerif.variable}`

// App Metadata
// - Ref: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
// - Icon Gen: https://realfavicongenerator.net/

export const metadata: Metadata = {
  metadataBase: new URL(app.url),
  title: {
    default: `${app.name} | ${app.title}`,
    template: `${app.name} | %s`,
  },
  description: app.description,
  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "mask-icon",
      color: brandColors.primary,
      url: "/safari-pinned-tab.svg",
    },
    {
      rel: "icon",
      sizes: "192x192",
      type: "image/png",
      url: "/android-chrome-192x192.png",
    },
    {
      rel: "icon",
      sizes: "512x512",
      type: "image/png",
      url: "/android-chrome-512x512.png",
    },
  ],
  other: {
    "msapplication-TileColor": brandColors.primary,
    "theme-color": brandColors.secondary,
  },
  openGraph: {
    title: app.title,
    description: app.description,
    siteName: app.name,
    type: "website",
    locale: app.locale,
    url: app.url,
    images: [
      {
        width: 1200,
        height: 630,
        url: "/assets/images/banner.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: app.name,
    description: app.description,
  },
}

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang={app.locale} className={fontVariables} suppressHydrationWarning>
    <body className="bg-background font-body text-foreground antialiased">
      <Providers>
        {children}
        <Footer />
      </Providers>
      <Suspense>
        <Analytics />
      </Suspense>
    </body>
  </html>
)

export default RootLayout
