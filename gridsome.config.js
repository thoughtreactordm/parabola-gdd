// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "PARABOLA - Game Design Document",
  templates: {
    Doc: "/:slug"
  },
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        // tailwindConfig: "./some/file/js",
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true,
        shouldPurgeUnusedKeyframes: true
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "docs/**/*.md",
        typeName: "Doc",
        route: "/:slug",
        remark: {
          plugins: ["@gridsome/remark-prismjs"]
        }
      }
    }
  ]
};
