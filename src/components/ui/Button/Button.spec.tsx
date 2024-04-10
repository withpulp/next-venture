import { fireEvent, render, screen } from "@testing-library/react"

import Button from "./Button"

describe("Button", () => {
  it("renders the Button component", () => {
    render(<Button>Test Button</Button>)
    expect(screen.getByRole("button", { name: /test button/i })).toBeInTheDocument()
  })

  it("renders the primary variant correctly", () => {
    render(
      <Button variant="solid" color="primary">
        Primary Button
      </Button>
    )
    const button = screen.getByRole("button", { name: /primary button/i })

    expect(button).toHaveClass("bg-primary")
    expect(button).toHaveClass("text-primary-foreground")
  })

  it("renders as disabled when isDisabled is true", () => {
    render(<Button isDisabled>Disabled Button</Button>)
    const button = screen.getByRole("button", { name: /disabled button/i })

    expect(button).toBeDisabled()
  })

  it("renders a loading state when isLoading is true", () => {
    render(<Button isLoading>Loading Button</Button>)

    expect(screen.getByRole("button", { name: /loading button/i })).toBeDisabled()
  })

  it("responds to click events", () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Clickable Button</Button>)
    const button = screen.getByRole("button", { name: /clickable button/i })
    fireEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
