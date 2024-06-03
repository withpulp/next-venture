// TODO:
// -- create Link with useLink hook from NextUI to get aria attributes - https://nextui.org/docs/components/link#custom-implementation

"use client"

import { Link as UILink } from "@nextui-org/link"
import { extendVariants } from "@nextui-org/system"

// Link Docs: https://nextui.org/docs/components/link
// Link API: https://nextui.org/docs/components/link#api

const Link = extendVariants(UILink, {
  variants: {
    size: {
      inherit: "!text-inherit",
      xs: "text-xs md:text-sm xl:text-base",
      sm: "text-sm md:text-base lg:text-md",
      md: "text-base md:text-md lg:text-lg",
      lg: "text-md md:text-lg lg:text-xl",
      xl: "text-lg md:text-xl lg:text-2xl",
    },
  },
  defaultVariants: {
    color: "foreground",
  },
})
Link.displayName = "Link"

export default Link
