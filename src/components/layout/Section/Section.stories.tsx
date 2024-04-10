import type { Meta, StoryObj } from "@storybook/react"

import Section from "./Section"

const meta: Meta<typeof Section> = {
  title: "Section",
  component: Section,
  args: {
    variant: "default",
    children: "Section",
    size: "md",
  },
  argTypes: {
    variant: {
      options: ["default", "row"],
      control: { type: "select" },
    },
    size: {
      options: ["none", "sm", "md", "lg", "xl"],
      control: { type: "select" },
    },
  },
}

type Story = StoryObj<typeof Section>

export const Default: Story = {
  render: (args) => <Section {...args} />,
}

export const RowVariant: Story = {
  render: (args) => (
    <Section {...args}>
      <nav>Left</nav>
      <nav>Center</nav>
      <nav>Right</nav>
    </Section>
  ),
  args: {
    variant: "row",
  },
}

export default meta
