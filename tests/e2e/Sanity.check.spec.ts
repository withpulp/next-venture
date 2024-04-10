import { expect, test } from "@playwright/test"

import app from "@/config/app.config"

const targetUrl = process.env.ENVIRONMENT_URL || process.env.PRODUCTION_URL

if (!targetUrl) {
  throw new Error("Please set the ENVIRONMENT_URL or PRODUCTION_URL environment variable")
}

test.describe("Sanity", () => {
  test.describe("Static pages", () => {
    test("should display the home page", async ({ page }) => {
      const title = `${app.name} | ${app.title}`
      await page.goto(targetUrl)

      await expect(page).toHaveTitle(title)
      await expect(
        page.getByRole("heading", {
          name: app.name,
        })
      ).toBeVisible()
    })
  })
})
