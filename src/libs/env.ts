import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

// T3 Next Env Docs: https://env.t3.gg/docs/nextjs

export const env = createEnv({
  server: {
    OPENAI_API_KEY: z.string().optional(),
  },
  client: {
    NEXT_PUBLIC_GA_ID: z.string().optional(),
    NEXT_PUBLIC_META_PIXEL_ID: z.string().optional(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
    NEXT_PUBLIC_META_PIXEL_ID: process.env.NEXT_PUBLIC_META_PIXEL_ID,
  },
})
