import playwright from "eslint-plugin-playwright"

export default [
  {
    ...playwright.configs["flat/recommended"],
    files: ["tests/**"],
    rules: {
      ...playwright.configs["flat/recommended"].rules,
      "@typescript-eslint/no-floating-promises": "error",
      // Customize Playwright rules
      // ...
    },
  },
]
