import type { MetadataRoute } from "next"

import { app, brandColors } from "@/config"

// Ref: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/manifest
// PWA Checklist: https://web.dev/articles/pwa-checklist?utm_source=lighthouse&utm_medium=devtools
// Maskable Icons: https://developer.chrome.com/docs/lighthouse/pwa/maskable-icon-audit/?utm_source=lighthouse&utm_medium=devtools#how_to_add_maskable_icon_support_to_your_pwa
// Maskable Icon Gen: https://maskable.app/editor

const manifest = (): MetadataRoute.Manifest => ({
  name: app.name,
  short_name: app.name,
  description: app.description,
  start_url: "/",
  display: "standalone",
  background_color: brandColors.secondary,
  theme_color: brandColors.primary,
  icons: [
    {
      src: "/maskable-icon.png",
      sizes: "196x196",
      type: "image/png",
      purpose: "maskable",
    },
    {
      src: "/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
    {
      src: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
    {
      src: "/favicon.ico",
      sizes: "48x48",
      type: "image/x-icon",
    },
    {
      src: "/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      src: "/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
    },
  ],
})

export default manifest
