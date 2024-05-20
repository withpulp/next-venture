"use client"

import { dataFocusVisibleClasses } from "@nextui-org/theme"
import type { LinkProps as NextLinkProps } from "next/link"
import NextLink from "next/link"
import { forwardRef, type ReactNode } from "react"
import { tv, type VariantProps } from "tailwind-variants"

// Note: NextUI Link doesn't work with v14.2 of NextJS

// import { Link as UILink } from "@nextui-org/link"
// import { extendVariants } from "@nextui-org/system"

// Link Docs: https://nextui.org/docs/components/link
// Link API: https://nextui.org/docs/components/link#api

// const Link = extendVariants(UILink, {
//   variants: {
//     size: {
//       inherit: "text-inherit",
//       xs: "text-xs md:text-sm xl:text-base",
//       sm: "text-sm md:text-base lg:text-md",
//       md: "text-base md:text-md lg:text-lg",
//       lg: "text-md md:text-lg lg:text-xl",
//       xl: "text-lg md:text-xl lg:text-2xl",
//     },
//   },
//   defaultVariants: {
//     color: "foreground",
//     size: "md",
//   },
// })

const linkStyles = tv({
  base: ["relative inline-flex items-center outline-none tap-highlight-transparent", ...dataFocusVisibleClasses],
  variants: {
    color: {
      inherit: "text-inherit",
      foreground: "text-foreground",
      primary: "text-primary",
      secondary: "text-secondary",
      success: "text-success",
      warning: "text-warning",
      danger: "text-danger",
    },
    size: {
      inherit: "text-inherit",
      xs: "text-xs md:text-sm xl:text-base",
      sm: "text-sm md:text-base lg:text-md",
      md: "text-base md:text-md lg:text-lg",
      lg: "text-md md:text-lg lg:text-xl",
      xl: "text-lg md:text-xl lg:text-2xl",
    },
    underline: {
      none: "no-underline",
      hover: "hover:underline",
      always: "underline",
      active: "active:underline",
      focus: "focus:underline",
    },
    isBlock: {
      true: [
        "px-2",
        "py-1",
        "hover:after:opacity-100",
        "after:content-['']",
        "after:inset-0",
        "after:opacity-0",
        "after:w-full",
        "after:h-full",
        "after:rounded-xl",
        "after:transition-background",
        "after:absolute",
      ],
      false: "hover:opacity-80 active:opacity-disabled transition-opacity",
    },
    isDisabled: {
      true: "opacity-disabled cursor-default pointer-events-none",
    },
  },
  compoundVariants: [
    {
      isBlock: true,
      color: "foreground",
      className: "hover:after:bg-foreground/10",
    },
    {
      isBlock: true,
      color: "primary",
      className: "hover:after:bg-primary/20",
    },
    {
      isBlock: true,
      color: "secondary",
      className: "hover:after:bg-secondary/20",
    },
    {
      isBlock: true,
      color: "success",
      className: "hover:after:bg-success/20",
    },
    {
      isBlock: true,
      color: "warning",
      className: "hover:after:bg-warning/20",
    },
    {
      isBlock: true,
      color: "danger",
      className: "hover:after:bg-danger/20",
    },
    {
      underline: ["hover", "always", "active", "focus"],
      className: "underline-offset-4",
    },
  ],
  defaultVariants: {
    color: "foreground",
    size: "md",
    underline: "none",
    isBlock: false,
    isDisabled: false,
  },
})

interface LinkProps extends NextLinkProps, VariantProps<typeof linkStyles> {
  children: ReactNode
  className?: string
  isExternal?: boolean
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, className, color, size, underline, isBlock, isDisabled, isExternal, ...props }, ref) => (
    <NextLink
      ref={ref}
      className={linkStyles({ color, size, underline, isBlock, isDisabled, className })}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </NextLink>
  )
)
Link.displayName = "Link"

export default Link
