const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');
const { merge } = require('webpack-merge');

module.exports = {
  stories: [
    '../packages/**/*.stories.mdx',
    '../packages/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) =>
    merge(config, {
      plugins: [new VanillaExtractPlugin()],
    }),
};
