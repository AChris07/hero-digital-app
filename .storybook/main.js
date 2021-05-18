module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
  ],
  webpackFinal: async (config) => {
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.test.toString().includes("svg")) {
        const test = rule.test
          .toString()
          .replace("svg|", "")
          .replace(/\//g, "");
        return { ...rule, test: new RegExp(test) };
      } else {
        return rule;
      }
    });

    config.module.rules.unshift({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
