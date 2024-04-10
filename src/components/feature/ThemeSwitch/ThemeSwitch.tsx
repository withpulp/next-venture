"use client"

import { MoonFilledIcon, SunFilledIcon } from "@nextui-org/shared-icons"
import { Switch } from "@nextui-org/switch"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Switch
      aria-label="Toggle Between Dark and Light Theme"
      defaultSelected
      color="default"
      size="sm"
      classNames={{ wrapper: "mr-0" }}
      startContent={<SunFilledIcon />}
      endContent={<MoonFilledIcon />}
      onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
    />
  )
}
ThemeSwitch.displayName = "ThemeSwitch"

export default ThemeSwitch
