import { formatISO } from "date-fns"

import app from "@/config/app.config"

export const formatDate = (date: Date) => formatISO(date, { representation: "date" })

export const getBaseUrl = () => {
  if (process.env.NODE_ENV === "production") {
    return app.url
  }

  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }

  return "http://localhost:3000"
}

export const kebabCase = (str: string) =>
  str
    .toLowerCase()
    .replace(/'/g, "") // Remove apostrophes
    .replace(/[^a-z0-9]+/g, "-") // Replace spaces and special characters with hyphens
    .replace(/(^-|-$)/g, "") // Remove leading and trailing hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with a single hyphen
