"use client"

import { ThemeSwitch } from "@/components/feature/ThemeSwitch"
import { Section } from "@/components/layout/Section"
import { Link } from "@/components/ui/Link"
import app from "@/config/app.config"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Section as="footer" className="container pt-16 md:pt-18 xl:pt-20" variant="row">
      <p className="font-headline text-xs md:text-sm xl:text-base">
        &copy; {currentYear},{" "}
        <Link href={app.organization.url} size="inherit" underline="always" isExternal>
          {app.organization.name}
        </Link>
        .
      </p>
      <nav className="flex flex-row flex-wrap justify-center items-center gap-4 font-headline md:gap-5 xl:gap-6">
        <Link href={`mailto:${app.organization.email}`} size="xs" underline="always">
          Contact
        </Link>
        <Link href="/discord" size="xs" underline="always">
          Discord
        </Link>
        <ThemeSwitch />
      </nav>
    </Section>
  )
}
Footer.displayName = "Footer"

export default Footer
