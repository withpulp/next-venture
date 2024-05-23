import { Button, Hero, Main, Section } from "@/components"

const RootPage = () => (
  <Main className="container">
    <Hero />
    <Section className="flex flex-row flex-wrap gap-4 md:gap-6 xl:gap-8">
      <Button>Default Button</Button>
      <Button color="primary">Primary Button</Button>
      <Button color="secondary">Secondary Button</Button>
      <Button color="success">Success Button</Button>
      <Button color="warning">Warning Button</Button>
      <Button color="danger">Danger Button</Button>
    </Section>
  </Main>
)

export default RootPage
