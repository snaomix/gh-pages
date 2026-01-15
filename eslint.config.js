import html from "@html-eslint/eslint-plugin";
import js from "@eslint/js";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    ...js.configs.recommended,
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
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
      "html/require-closing-tags": ["error"],
      "html/no-extra-spacing-attrs": ["error", { enforceBeforeSelfClose: true }],
    },
  },
  eslintConfigPrettier,
  { ignores: ["**/docs/", "**/node_modules/", "**/.git/", "**/.github/"] },
];
