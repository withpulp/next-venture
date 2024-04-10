import { type ColorScale, type ThemeColors } from "@nextui-org/theme"

import { type Theme } from "@/config/theme.config"

// Have to define this because ColorScale can also be a string
export type ThemeColorScale = {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
  foreground: string
  DEFAULT: string
}

// TODO: handle typeof color === "string"
const isValidThemeColor = (color: any): color is ColorScale => {
  return typeof color === "object" && color !== null && !Array.isArray(color)
}

// Options for reversing color scales for different themes
// TODO: add reverse rules for layout and content colors
const reverseColorOptions = {
  light: {
    DEFAULT: "400", // Fallback to 400 for light themes
    foreground: "900", // Fallback to 900 for light themes
  },
  dark: {
    DEFAULT: "500", // Fallback to 500 for dark themes
    foreground: "50", // Fallback to 50 for dark themes
  },
}

export const reverseColorScale = (color: ColorScale, theme: Theme): ThemeColorScale => {
  if (!isValidThemeColor(color)) {
    return color
  }

  const reversedScale: Partial<ThemeColorScale> = {}

  Object.entries(color).forEach(([key, value]) => {
    if (/^\d+$/.test(key)) {
      const numericKey = parseInt(key, 10)
      const reverseScale = (1000 - numericKey).toString()
      reversedScale[reverseScale] = value
    } else {
      reversedScale[key] = value
    }
  })

  // Applying theme-specific rules for DEFAULT and foreground
  // TODO: handle reversals for layout and content colors
  reversedScale.DEFAULT = color[reverseColorOptions[theme].DEFAULT]
  reversedScale.foreground = color[reverseColorOptions[theme].foreground]

  return reversedScale as ThemeColorScale
}

export const reverseThemeColors = (colors: ThemeColors, theme: Theme): ThemeColors => {
  const reversedColors: Partial<ThemeColors> = {}

  Object.keys(colors).forEach((colorKey) => {
    const colorScale = colors[colorKey]
    if (isValidThemeColor(colorScale)) {
      reversedColors[colorKey] = reverseColorScale(colorScale, theme)
    } else {
      // Directly assign if it's not a valid ColorScale object
      // TODO: reverse color string value using base colors
      reversedColors[colorKey] = colorScale
    }
  })

  return reversedColors as ThemeColors
}
