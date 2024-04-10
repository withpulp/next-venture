"use client"

import { forwardRef, type HTMLAttributes } from "react"
import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"

const mainStyles = tv({
  base: "flex flex-1",
  variants: {
    variant: {
      default: "flex-col",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

interface MainProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof mainStyles> {}

const Main = forwardRef<HTMLDivElement, MainProps>(({ children, className, variant, ...props }, ref) => (
  <main className={mainStyles({ variant, className })} ref={ref} {...props}>
    {children}
  </main>
))
Main.displayName = "Main"

export default Main
