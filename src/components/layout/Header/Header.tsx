"use client"

import Image from "next/image"

import { Section } from "@/components/layout/Section"
import { Link } from "@/components/ui/Link"
import app from "@/config/app.config"

const Header = () => (
  <Section as="header" className="container">
    <Link href="/" size="lg" className="font-headline font-semibold flex gap-unit-2 md:gap-unit-3 xl:gap-unit-4">
      <Image alt={`${app.name} Logo`} src="/assets/images/logo.png" width={48} height={48} /> {app.name}
    </Link>
  </Section>
)
Header.displayName = "Header"

export default Header
