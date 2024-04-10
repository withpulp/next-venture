import { defineConfig, devices } from "@playwright/test"

// Use process.env.PORT by default with fallback to port 3000
const PORT = process.env.PORT || 3000
// Set webServer.url and use.baseURL with the location of the WebServer respecting the correct set port
const baseURL = `http://localhost:${PORT}`
// *.check.spec.ts files rely on ENVIRONMENT_URL instead of baseURL
process.env.ENVIRONMENT_URL = baseURL

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  // Timeout per test
  timeout: 30 * 1000,
  // Run tests in files in parallel
  fullyParallel: true,
  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.CI,
  // Retry on CI only
  retries: process.env.CI ? 2 : 0,
  // Opt out of parallel tests on CI.
  workers: process.env.CI ? 1 : undefined,
  // Reporter to use. See https://playwright.dev/docs/test-reporters
  reporter: process.env.CI ? "github" : "list",
  // Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions.
  use: {
    // Use baseURL so to make navigation relative. See https://playwright.dev/docs/api/class-testoptions#test-options-base-url
    baseURL,
    // Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer
    trace: "on-first-retry",
  },
  // Run your local dev server before starting the tests:
  // https://playwright.dev/docs/test-advanced#launching-a-development-web-server-during-the-tests
  webServer: {
    command: process.env.CI ? "yarn start" : "yarn dev",
    url: baseURL,
    timeout: 2 * 60 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  // Configure projects for major browsers
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
    // Run additional browser tests on CI only
    ...(process.env.CI
      ? [
          // Test against mobile viewports
          {
            name: "Mobile Chrome",
            use: { ...devices["Pixel 5"] },
          },
          {
            name: "Mobile Safari",
            use: { ...devices["iPhone 12"] },
          },
          // Test against branded browsers
          {
            name: "Microsoft Edge",
            use: { ...devices["Desktop Edge"], channel: "msedge" },
          },
          {
            name: "Google Chrome",
            use: { ...devices["Desktop Chrome"], channel: "chrome" },
          },
        ]
      : []),
  ],
})
