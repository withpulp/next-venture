"use client"

import { useRouter } from "next/navigation"

import { Section } from "@/components/layout/Section"
import { Button } from "@/components/ui/Button"
import app from "@/config/app.config"

const Hero = () => {
  const router = useRouter()

  return (
    <Section as="header" className="min-h-screen-2/5 items-center justify-end text-center gap-4 md:gap-6 xl:gap-8">
      <h1>{app.name}</h1>
      <p>{app.title}</p>
      <div className="mt-4 md:mt-6 xl:mt-8 flex flex-row flex-wrap justify-center items-center gap-4 md:gap-5 xl:gap-6">
        <Button color="secondary" variant="bordered" size="lg" onPress={() => router.push("/discord")}>
          Join Discord
        </Button>
        <Button color="primary" size="lg" onPress={() => router.push("/features")}>
          View Features
        </Button>
      </div>
    </Section>
  )
}
Hero.displayName = "Hero"

export default Hero
