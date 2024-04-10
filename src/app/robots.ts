import type { MetadataRoute } from "next"

import app from "@/config/app.config"

// Ref: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: "*",
    allow: "/",
  },
  sitemap: `${app.url}/sitemap.xml`,
})

export default robots
