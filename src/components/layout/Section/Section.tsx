"use client"

import { type ElementType, forwardRef, type HTMLAttributes } from "react"
import { tv, type VariantProps } from "tailwind-variants"

const sectionStyles = tv({
  base: "flex",
  variants: {
    variant: {
      default: "flex-col",
      row: "flex-col xs:flex-row xs:flex-wrap items-center justify-between",
    },
    size: {
      none: "p-0",
      sm: "px-2 py-3 md:p-4 xl:px-6 xl:py-5",
      md: "px-4 py-5 md:p-6 xl:px-8 xl:py-7",
      lg: "px-6 py-7 md:p-8 xl:px-10 xl:py-9",
      xl: "px-8 py-9 md:p-10 xl:px-12 xl:py-11",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
  compoundVariants: [
    // Row size variants
    {
      size: "sm",
      variant: "row",
      className: "gap-2 md:gap-4 xl:gap-6",
    },
    {
      size: "md",
      variant: "row",
      className: "gap-4 md:gap-6 xl:gap-8",
    },
    {
      size: "lg",
      variant: "row",
      className: "gap-6 md:gap-8 xl:gap-10",
    },
    {
      size: "xl",
      variant: "row",
      className: "gap-8 md:gap-10 xl:gap-12",
    },
  ],
})

interface SectionProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof sectionStyles> {
  as?: ElementType
}

const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ children, className, variant, size, as: Component = "section", ...props }, ref) => (
    <Component className={sectionStyles({ variant, size, className })} ref={ref} {...props}>
      {children}
    </Component>
  )
)
Section.displayName = "Section"

export default Section
