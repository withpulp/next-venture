import type { StorybookConfig } from "@storybook/nextjs";

// TODO: Add mdx stories for docs
// - need to configure storybook loader for mdx and add addon-docs
const config: StorybookConfig = {
  stories: [
    "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: { builder: { useSWC: true } },
  },
  docs: {
    autodocs: "tag",
  },
  core: {
    disableTelemetry: true,
  },
};

export default config;
