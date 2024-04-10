import type { MetadataRoute } from "next"

import app from "@/config/app.config"

// Ref: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap

const sitemap = (): MetadataRoute.Sitemap => {
  // Set URLs to add to the sitemap
  const urls: MetadataRoute.Sitemap = [
    {
      url: app.url,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${app.url}/features`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ]

  return urls
}

export default sitemap
