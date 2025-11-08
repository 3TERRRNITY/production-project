import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"
import pluginReact from "eslint-plugin-react"
import { defineConfig } from "eslint/config"

export default defineConfig([
    {
        ignores: ["node_modules/", "build", ".idea", "public"]
    },
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
  {
      files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
      plugins: { js },
      extends: ["js/recommended"],
      languageOptions: { globals: globals.browser },
      rules: {
          "no-unused-vars": "warn",
          "@typescript-eslint/no-unused-vars": "warn",
          "no-undef": "off",
          "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
          semi: ["error", "never"],
          "react/react-in-jsx-scope": "off",
          "react/no-deprecated": "warn",
      },
  },

])
