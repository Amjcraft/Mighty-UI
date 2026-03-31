import type { StorybookConfig } from "@storybook/react-vite";

import { dirname } from "path";
import { resolve } from "path";

import { fileURLToPath } from "url";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): string {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}

const storybookDir = dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-vitest"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-docs"),
  ],
  framework: getAbsolutePath("@storybook/react-vite"),
  async viteFinal(config) {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...(config.resolve && !Array.isArray(config.resolve.alias)
            ? config.resolve.alias
            : {}),
          "@components/ui": resolve(storybookDir, "../src/components"),
          "@components": resolve(storybookDir, "../src"),
          "@ui": resolve(storybookDir, "../src/components"),
          "@hooks": resolve(storybookDir, "../src/hooks"),
          "@lib": resolve(storybookDir, "../src/lib"),
          "@utils": resolve(storybookDir, "../src/lib/utils.ts"),
        },
      },
    };
  },
};
export default config;
