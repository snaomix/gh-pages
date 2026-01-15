/** @type {import('stylelint').Config} */
export default {
  plugins: ["stylelint-scss"],
  extends: ["stylelint-config-standard-scss", "stylelint-config-recess-order"],
  rules: {
    "number-max-precision": 6,
    "scss/load-partial-extension": "never",
    "scss/at-import-partial-extension-disallowed-list": [".scss"],
    "value-keyword-case": [
      "lower",
      {
        camelCaseSvgKeywords: true,
      },
    ],
  },
};
