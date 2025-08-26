const html = require("@html-eslint/eslint-plugin");
const js = require("@eslint/js");
const globals = require("globals");
const eslintConfigPrettier = require("eslint-config-prettier");

module.exports = [
  {
    ...js.configs.recommended,
    files: ['**/*.js'],
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node
      },
    },
  },
  {
    ...html.configs.recommended,
    files: ["**/*.html"],
    plugins: {
      html,
    },
    language: "html/html",
    rules: {
      ...html.configs.recommended.rules,
      "html/attrs-newline": "off",
      "html/indent": ["error", 2],
      "html/require-closing-tags": "error",
      "html/no-extra-spacing-attrs": ["error", { "enforceBeforeSelfClose": true }],
    },
  },
  eslintConfigPrettier,
];
