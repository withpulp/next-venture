import { sendGAEvent } from "@next/third-parties/google"

// Google Analytics

// https://developers.google.com/analytics/devguides/collection/ga4/event-parameters?client_type=gtag
export const gaEvent = (eventParams: object) => {
  if (process.env.NODE_ENV === "production") {
    sendGAEvent(eventParams)
  }
}

// Meta Pixel

interface PixelEventProps {
  name: string // https://developers.facebook.com/docs/meta-pixel/reference#standard-events
  options?: any // https://developers.facebook.com/docs/meta-pixel/reference#object-properties
}

export const pixelPageView = () => {
  if (process.env.NODE_ENV === "production" && window.fbq) {
    window.fbq("track", "PageView")
  }
}

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const pixelEvent = ({ name, options = {} }: PixelEventProps) => {
  if (process.env.NODE_ENV === "production" && window.fbq) {
    window.fbq("track", name, options)
  }
}
