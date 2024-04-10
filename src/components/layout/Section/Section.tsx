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
      sm: "px-unit-2 py-unit-3 md:p-unit-4 xl:px-unit-6 xl:py-unit-5",
      md: "px-unit-4 py-unit-5 md:p-unit-6 xl:px-unit-8 xl:py-unit-7",
      lg: "px-unit-6 py-unit-7 md:p-unit-8 xl:px-unit-10 xl:py-unit-9",
      xl: "px-unit-8 py-unit-9 md:p-unit-10 xl:px-unit-12 xl:py-unit-11",
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
      className: "gap-unit-unit-2 md:gap-unit-unit-4 xl:gap-unit-unit-6",
    },
    {
      size: "md",
      variant: "row",
      className: "gap-unit-4 md:gap-unit-6 xl:gap-unit-8",
    },
    {
      size: "lg",
      variant: "row",
      className: "gap-unit-6 md:gap-unit-8 xl:gap-unit-10",
    },
    {
      size: "xl",
      variant: "row",
      className: "gap-unit-8 md:gap-unit-10 xl:gap-unit-12",
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
