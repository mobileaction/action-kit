const { mergeConfig, loadConfigFromFile } = require('vite');
const path = require('path');
const svgLoader = require('vite-svg-loader');
module.exports = {
  stories: [
    '../src/**/examples.@(js|jsx|ts|tsx|vue)',
    '../src/**/examples/**/*.@(js|jsx|ts|tsx|vue)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
        // Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
        // For more details on this addon's options.
        postCss: true,
      },
    },
  ],
  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(previousConfig) {
    previousConfig.plugins.push(svgLoader());
    return mergeConfig(previousConfig, {
      optimizeDeps: {
        include: ['storybook-dark-mode'],
      },
    });
  },
};
