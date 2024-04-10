"use client"

import { NextUIProvider, type NextUIProviderProps } from "@nextui-org/system"
import { useRouter } from "next/navigation"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { twMerge } from "tailwind-merge"

import { defaultTheme } from "@/config/theme.config"

// TODO: set default theme based on system preference
const Providers = ({ children, className, ...rest }: NextUIProviderProps) => {
  const router = useRouter()

  return (
    <NextUIProvider
      className={twMerge("flex min-h-screen flex-1 flex-col", className)}
      navigate={router.push}
      {...rest}
    >
      <NextThemesProvider attribute="class" defaultTheme={defaultTheme}>
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}

export default Providers
