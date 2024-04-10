import type { Config } from "jest"
import nextJest from "next/jest"

const createJestConfig = nextJest({
  dir: "./",
})

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "!./src/**/_*.{js,jsx,ts,tsx}",
    "!./src/**/*.stories.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
  ],
  // Set global coverage thresholds
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  // Handle module aliases (this will be automatically configured for you soon)
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@/api/(.*)$": "<rootDir>/src/api/$1",
    "^@/public/(.*)$": "<rootDir>/public/$1",
  },
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/tests/"],
}

export default createJestConfig(config)
