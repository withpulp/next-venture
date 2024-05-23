import { nextui } from "@nextui-org/theme"
import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"

import { colors, fonts } from "./src/config/theme.config"

// - TailwindCSS Docs: https://tailwindcss.com/docs/installation
// - NextUI Docs: https://nextui.org/docs/guide/introduction

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", // Adding this temporarily to fix missing switch styles
    // "./node_modules/@nextui-org/theme/dist/components/(button|image|skeleton|switch).js", // Add this when switch is available in theme components
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        ...fonts,
      },
      fontSize: {
        inherit: "inherit",
        // TODO: generate with a theme util and import from theme.config
        "3xs": "0.5rem", // 8px
        "2xs": "0.625rem", // 10px
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
        md: "1.125rem", // 18px
        lg: "1.25rem", // 20px
        xl: "1.375rem", // 22px
        "2xl": "1.5rem", // 24px
        "3xl": "1.625rem", // 26px
        "4xl": "1.75rem", // 28px
        "5xl": "1.875rem", // 30px
        "6xl": "2rem", // 32px
        "7xl": "2.125rem", // 34px
        "8xl": "2.25rem", // 36px
        "9xl": "2.375rem", // 38px
        "10xl": "2.5rem", // 40px
        "11xl": "2.625rem", // 42px
        "12xl": "2.75rem", // 44px
        "13xl": "2.875rem", // 46px
        "14xl": "3rem", // 48px
        "15xl": "3.125rem", // 50px
        "16xl": "3.25rem", // 52px
        "17xl": "3.375rem", // 54px
        "18xl": "3.5rem", // 56px
        "19xl": "3.625rem", // 58px
        "20xl": "3.75rem", // 60px
        "21xl": "3.875rem", // 62px
        "22xl": "4rem", // 64px
        "23xl": "4.125rem", // 66px
        "24xl": "4.25rem", // 68px
        "25xl": "4.375rem", // 70px
        "26xl": "4.5rem", // 72px
        "27xl": "4.625rem", // 74px
        "28xl": "4.75rem", // 76px
        "29xl": "4.875rem", // 78px
        "30xl": "5rem", // 80px
      },
      // TODO: generate with a theme util and import from theme.config (update all width and height utils)
      minHeight: {
        "screen-1/12": "8.333333vh",
        "screen-1/6": "16.666667vh",
        "screen-1/5": "20vh",
        "screen-1/4": "25vh",
        "screen-1/3": "33.333333vh",
        "screen-2/5": "40vh",
        "screen-1/2": "50vh",
        "screen-3/5": "60vh",
        "screen-2/3": "66.666667vh",
        "screen-3/4": "75vh",
        "screen-4/5": "80vh",
        "screen-5/6": "83.333333vh",
        "screen-11/12": "91.666667vh",
        screen: "100vh",
      },
      screens: {
        ...defaultTheme.screens,
        xs: "480px",
        "2xl": "1440px",
      },
    },
  },
  plugins: [
    // NextUI Tailwind plugin config
    nextui({
      // Layout ref: https://nextui.org/docs/customization/layout
      layout: {
        fontSize: {
          tiny: "0.75rem",
          small: "0.875rem",
          medium: "1rem",
          large: "1.25rem",
        },
      },
      // Themes ref: https://nextui.org/docs/customization/theme
      // Colors ref: https://nextui.org/docs/customization/colors
      themes: {
        light: {
          colors: colors.light,
        },
        dark: {
          colors: colors.dark,
        },
      },
    }),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
}

export default config
