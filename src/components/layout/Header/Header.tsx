"use client"

import Image from "next/image"

import { Section } from "@/components/layout/Section"
import { Link } from "@/components/ui/Link"
import app from "@/config/app.config"

const Header = () => (
  <Section as="header" className="container">
    <Link href="/" size="lg" className="font-headline font-semibold flex gap-2 md:gap-3 xl:gap-4">
      <Image alt={`${app.name} Logo`} src="/assets/images/logo.png" width={48} height={48} /> {app.name}
    </Link>
  </Section>
)
Header.displayName = "Header"

export default Header
