import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';

export default defineConfig([
	js.configs.recommended,
  eslintPluginPrettierRecommended,
  tseslint.configs.recommended,
  tseslint.configs.eslintRecommended,
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2021,
      },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off"
    },
  },
  globalIgnores(['docs', 'dist', 'types'])
]);
