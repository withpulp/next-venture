import type { Meta, StoryObj } from "@storybook/react"

import Button from "./Button"

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  args: {
    variant: "solid",
    children: "Button",
    color: "default",
    size: "md",
    radius: "full",
    fullWidth: false,
    isDisabled: false,
    isLoading: false,
    isIconOnly: false,
  },
  argTypes: {
    variant: {
      options: ["solid", "bordered", "light", "flat", "faded", "shadow", "ghost"],
      control: { type: "select" },
    },
    color: {
      options: ["default", "primary", "secondary", "success", "warning", "danger"],
      control: { type: "select" },
    },
    size: {
      options: ["sm", "md", "lg", "xl"],
      control: { type: "select" },
    },
    radius: {
      options: ["none", "sm", "md", "lg", "full"],
      control: { type: "select" },
    },
    fullWidth: {
      control: { type: "boolean" },
    },
    isDisabled: {
      control: { type: "boolean" },
    },
    isLoading: {
      control: { type: "boolean" },
    },
    isIconOnly: {
      control: { type: "boolean" },
    },
  },
}

type Story = StoryObj<typeof Button>

// Template to generate multiple buttons in a row for each variant

const VariantsTemplate: Story = {
  render: (args) => (
    <div className="flex flex-row flex-wrap items-center gap-4">
      <Button {...args} color="default">
        Default
      </Button>
      <Button {...args} color="primary">
        Primary
      </Button>
      <Button {...args} color="secondary">
        Secondary
      </Button>
      <Button {...args} color="success">
        Success
      </Button>
      <Button {...args} color="warning">
        Warning
      </Button>
      <Button {...args} color="danger">
        Danger
      </Button>
    </div>
  ),
}

// Template to generate multiple buttons in a row for each size

const SizesTemplate: Story = {
  render: (args) => (
    <div className="flex flex-row flex-wrap items-center gap-4">
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
      <Button {...args} size="xl">
        Extra Large
      </Button>
    </div>
  ),
}

// Default Button

export const DefaultButton: Story = {
  render: (args) => <Button {...args} />,
}

// Button Variants

export const SolidButtons: Story = {
  ...VariantsTemplate,
  args: {
    ...meta.args,
    variant: "solid",
  },
}

export const BorderedButtons: Story = {
  ...VariantsTemplate,
  args: {
    ...meta.args,
    variant: "bordered",
  },
}

export const LightButtons: Story = {
  ...VariantsTemplate,
  args: {
    ...meta.args,
    variant: "light",
  },
}

export const FlatButtons: Story = {
  ...VariantsTemplate,
  args: {
    ...meta.args,
    variant: "flat",
  },
}

export const FadedButtons: Story = {
  ...VariantsTemplate,
  args: {
    ...meta.args,
    variant: "faded",
  },
}

export const ShadowButtons: Story = {
  ...VariantsTemplate,
  args: {
    ...meta.args,
    variant: "shadow",
  },
}

export const GhostButtons: Story = {
  ...VariantsTemplate,
  args: {
    ...meta.args,
    variant: "ghost",
  },
}

// Button Sizes

export const ButtonSizes: Story = {
  ...SizesTemplate,
  args: {
    ...meta.args,
    size: "sm",
  },
}

export default meta
