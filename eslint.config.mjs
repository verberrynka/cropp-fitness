import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: {
      js,
      prettier,
    },
    rules: {
      "prettier/prettier": "error",
    },
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
]);
