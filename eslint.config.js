const html = require("@html-eslint/eslint-plugin");
const htmlParser = require("@html-eslint/parser");
const js = require("@eslint/js");
const globals = require("globals");
const eslintConfigPrettier = require("eslint-config-prettier");

module.exports = [
  {
    files: ['**/*.js'],
    rules: {
      ...js.configs.recommended.rules,
    },
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node
      },
    },
  },
  {
    ...html.configs["flat/recommended"],
    files: ["**/*.html"],
    plugins: {
      "@html-eslint": html,
  },
    rules: {
      ...html.configs["flat/recommended"].rules,
      "@html-eslint/attrs-newline": "off",
      "@html-eslint/indent": ["error", 2],
      "@html-eslint/require-closing-tags": "error",
      "@html-eslint/no-extra-spacing-attrs": ["error", { "enforceBeforeSelfClose": true }],
    },
    languageOptions: {
      parser: htmlParser,
    },
  },
  eslintConfigPrettier,
];
