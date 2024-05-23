import type { MetadataRoute } from "next"

import { formatDate, getBaseUrl } from "@/utils/helper.utils"

// Ref: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap

const currentDate = formatDate(new Date())
const baseUrl = getBaseUrl()

const sitemap = (): MetadataRoute.Sitemap => {
  // Set URLs to add to the sitemap
  const urls: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/features`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 1,
    },
  ]

  return urls
}

export default sitemap
