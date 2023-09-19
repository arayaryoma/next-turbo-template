import typescriptParser from "@typescript-eslint/parser";
import typescript from "@typescript-eslint/eslint-plugin";

/**
 * @type import('eslint').Linter.FlatConfig[]
 */
export const typescriptConfig = [
  {
    files: ["**/*.{ts,mts,cts,tsx}"],
    plugins: {
      typescript,
    },
    languageOptions: {
      parser: typescriptParser,
    },
    rules: {
      "typescript/explicit-function-return-type": "warn",
    },
  },
];
