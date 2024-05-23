/* eslint-disable @next/next/no-img-element */

"use client"

// Refs:
// GoogleAnalytics - https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries#google-analytics
// MetaPixel - https://github.com/vercel/next.js/tree/canary/examples/with-facebook-pixel

import { GoogleAnalytics } from "@next/third-parties/google"
import { usePathname, useSearchParams } from "next/navigation"
import Script from "next/script"
import { useEffect, useState } from "react"

import { pixelPageView } from "@/libs/analytics"
import { env } from "@/libs/env"

const Analytics = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [metaPixelLoaded, setMetaPixelLoaded] = useState(false)

  useEffect(() => {
    if (metaPixelLoaded) {
      pixelPageView()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [metaPixelLoaded, pathname, searchParams.toString()])

  // Only render analytics scripts in production
  if (process.env.NODE_ENV !== "production") return null

  return (
    <>
      {env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={env.NEXT_PUBLIC_GA_ID} />}
      {env.NEXT_PUBLIC_META_PIXEL_ID && (
        <>
          <noscript>
            <img
              alt="Meta Pixel NoScript Fallback"
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${env.NEXT_PUBLIC_META_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
          <Script
            id="meta-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${env.NEXT_PUBLIC_META_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
            }}
            onLoad={() => setMetaPixelLoaded(true)}
          />
        </>
      )}
    </>
  )
}

Analytics.displayName = "Analytics"

export default Analytics
