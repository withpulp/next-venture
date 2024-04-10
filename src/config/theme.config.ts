// Theme Config
// - Contains theme constants and other relevant configs used by TailwindCSS, NextUI, metadata, web manifest and more.

import type { ThemeColors } from "@nextui-org/theme"

// Using relative import paths so tailwind.config can compile without errors
import { reverseColorScale } from "../utils/theme.utils"

export type Theme = "light" | "dark"

// Default Theme (used by NextThemesProvider)
export const defaultTheme: Theme = "light"

// Brand colors
// - These are made available for easier metadata and web manifest config.
// - Sometimes the original brand color might not remain in the generated color scales (as was the case with the secondary colors)
export const brandColors = {
  primary: "#49d07c", // Color sampled from logo in: /public/assets/images/logo.png
  secondary: "#0e222d", // Color sampled from background in: /public/assets/images/banner.png
}

// Base Colors
// - You can change the base colors scales to fit your preference (just make sure to keep the same structure).
// - The base color scales are defined from light to dark with 50 as the lightest and 900 as the darkest (reverse the scale if dark theme is your default).
// - The DEFAULT (background) values will fallback to 400 for light themes and 500 for dark themes.
// - The foreground values will fallback to 900 for light themes and 50 for dark themes.
// - You have the option to set custom DEFAULT and foreground values for each theme's color scale, if you want.
// - How to generate color scales (this is only a suggestion):
//   1. Use https://colors.eva.design/ to generate semantic colors using the base primary color (in this case the green logo color).
//   2. Copy your preferred color value from the generated scales (this is helpful for success, warning, and danger colors).
//   3. Use https://smart-swatch.netlify.app/ to generate the color scales for success, warning, and danger.
const baseColors = {
  // These are available incase you don't want pure white or black colors (just be mindful of accessibility contrast issues)
  black: "#000",
  white: "#fff",
  // Default colors (generated from gray color that matches primary brand color)
  default: {
    50: "#f0f4f4",
    100: "#d9dede",
    200: "#bec9c9",
    300: "#a2b2b2",
    400: "#869d9d",
    500: "#6d8484",
    600: "#566767",
    700: "#3e4949",
    800: "#262c2c",
    900: "#0b0f0f",
  },
  // Primary colors
  primary: {
    50: "#e2fdeb",
    100: "#bdf0d1",
    200: "#97e6b5",
    300: "#6fda98",
    400: brandColors.primary,
    500: "#2fb662",
    600: "#228e4b",
    700: "#156536",
    800: "#083e1f",
    900: "#001605",
  },
  // Secondary colors
  secondary: {
    50: "#e7f5fe",
    100: "#c5dfed",
    200: "#a1c9df",
    300: "#7db2d1",
    400: "#5a9dc4",
    500: "#4283aa",
    600: "#326685",
    700: "#23495f",
    800: "#122c3a",
    900: "#001017",
  },
  // Success colors
  success: {
    50: "#f5fee0",
    100: "#e5f8b5",
    200: "#d5f38a",
    300: "#c5ef5d",
    400: "#b4ea30",
    500: "#9cd119",
    600: "#78a210",
    700: "#567409",
    800: "#334602",
    900: "#0f1800",
  },
  // Warning colors
  warning: {
    50: "#fff4da",
    100: "#ffe2ad",
    200: "#ffce7d",
    300: "#ffbb4b",
    400: "#ffa71a",
    500: "#e68e00",
    600: "#b36e00",
    700: "#814f00",
    800: "#4e2e00",
    900: "#1f0f00",
  },
  // Danger colors
  danger: {
    50: "#ffe2e3",
    100: "#ffb1b4",
    200: "#ff7f84",
    300: "#ff4d53",
    400: "#fe1d23",
    500: "#e5050a",
    600: "#b30007",
    700: "#810004",
    800: "#4f0001",
    900: "#200000",
  },
}

const lightColors: ThemeColors = {
  // Layout Colors
  background: baseColors.white,
  foreground: baseColors.black,
  divider: baseColors.default[300],
  overlay: baseColors.default[900],
  focus: baseColors.primary[400],
  // Content Colors
  content1: baseColors.default[50],
  content2: baseColors.default[100],
  content3: baseColors.default[200],
  content4: baseColors.default[300],
  // Default Colors
  default: {
    ...baseColors.default,
    DEFAULT: baseColors.default[400],
    foreground: baseColors.black,
  },
  // Primary Colors
  primary: {
    ...baseColors.primary,
    DEFAULT: baseColors.primary[400],
    foreground: brandColors.secondary,
  },
  // Secondary Colors
  secondary: {
    ...baseColors.secondary,
    DEFAULT: brandColors.secondary,
    foreground: baseColors.primary[400],
  },
  // Success Colors
  success: {
    ...baseColors.success,
    DEFAULT: baseColors.success[400],
    foreground: baseColors.black,
  },
  // Warning Colors
  warning: {
    ...baseColors.warning,
    DEFAULT: baseColors.warning[400],
    foreground: baseColors.black,
  },
  // Danger Colors
  danger: {
    ...baseColors.danger,
    DEFAULT: baseColors.danger[400],
    foreground: baseColors.black,
  },
}

const darkColors: ThemeColors = {
  // Layout Colors
  background: baseColors.black,
  foreground: baseColors.white,
  divider: baseColors.default[600],
  overlay: baseColors.default[50],
  focus: baseColors.primary[500],
  // Content Colors
  content1: baseColors.default[900],
  content2: baseColors.default[800],
  content3: baseColors.default[700],
  content4: baseColors.default[600],
  // Default Colors
  default: {
    ...reverseColorScale(baseColors.default, "dark"),
    DEFAULT: baseColors.default[600],
    foreground: baseColors.white,
  },
  // Primary Colors
  primary: {
    ...reverseColorScale(baseColors.primary, "dark"),
    foreground: baseColors.secondary[900],
  },
  // Secondary Colors
  secondary: {
    ...reverseColorScale(baseColors.secondary, "dark"),
    DEFAULT: baseColors.secondary[400],
    foreground: baseColors.black,
  },
  // Success Colors
  success: {
    ...reverseColorScale(baseColors.success, "dark"),
    foreground: baseColors.black,
  },
  // Warning Colors
  warning: {
    ...reverseColorScale(baseColors.warning, "dark"),
    foreground: baseColors.black,
  },
  // Danger Colors
  danger: {
    ...reverseColorScale(baseColors.danger, "dark"),
    foreground: baseColors.white,
  },
}

// Theme Colors
export const colors = {
  light: lightColors,
  dark: darkColors,
}

// Theme fonts
export const fonts = {
  headline: [
    "var(--font-chakra-petch)",
    "Arial",
    "Helvetica",
    "Verdana",
    "Tahoma",
    "Gill Sans",
    "Lucida Sans",
    "Lucida Grande",
    "sans-serif",
  ],
  body: [
    "var(--font-noto-serif)",
    "Arial",
    "Helvetica",
    "Verdana",
    "Tahoma",
    "Gill Sans",
    "Lucida Sans",
    "Lucida Grande",
    "sans-serif",
  ],
}

export const theme = {
  colors,
  fonts,
}

export default theme
