/* eslint-disable import/no-extraneous-dependencies */
import withBundleAnalyzer from "@next/bundle-analyzer"
import createJiti from "jiti"
import { fileURLToPath } from "url"

const bundleAnalyzer = withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" })
const jiti = createJiti(fileURLToPath(import.meta.url))

jiti("./src/libs/env")

// Next Config Docs: https://nextjs.org/docs/app/api-reference/next-config-js

/**
 * @type {import('next').NextConfig}
 */
const config = bundleAnalyzer({
  reactStrictMode: true,
  // Add remote image patterns to allow images from external sources
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "http",
  //       hostname: "books.google.com",
  //       pathname: "**",
  //     },
  //   ],
  // },
})

export default config
