import type { MetadataRoute } from "next"

import { getBaseUrl } from "@/utils/helper.utils"

// Ref: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots

const baseUrl = getBaseUrl()

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: "*",
    allow: "/",
  },
  sitemap: `${baseUrl}/sitemap.xml`,
})

export default robots
