import typescriptParser from "@typescript-eslint/parser";
import typescript from "@typescript-eslint/eslint-plugin";
import next from "@next/eslint-plugin-next";

/**
 * @type import('eslint').Linter.FlatConfig[]
 */
export const nextConfig = [
  {
    files: ["**/*.ts", "**/*.mts", "**/*.cts", "**/*.tsx"],
    plugins: {
      typescript,
      next,
    },
    languageOptions: {
      parser: typescriptParser,
    },
    rules: {
      "typescript/explicit-function-return-type": "warn",
    },
  },
  {
    files: ["**/*.js", "**/*.mjs", "**/*.jsx"],
    plugins: {
      next,
    },
  },
];
