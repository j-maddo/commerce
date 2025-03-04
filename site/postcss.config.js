module.exports = {
  plugins: [
    "tailwindcss/nesting",
    "tailwindcss",
    "autoprefixer",
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
        },
      },
    ],
  ],

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
