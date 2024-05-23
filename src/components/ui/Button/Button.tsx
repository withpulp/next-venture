"use client"

import { Button as UIButton } from "@nextui-org/button"
import { extendVariants } from "@nextui-org/system"

// Button Docs: https://nextui.org/docs/components/button
// Button API: https://nextui.org/docs/components/button#api

const Button = extendVariants(UIButton, {
  variants: {
    size: {
      xl: "px-8 min-w-28 h-14 text-large gap-4",
    },
  },
  defaultVariants: {
    radius: "full",
  },
})
Button.displayName = "Button"

export default Button
