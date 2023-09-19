import { typescriptConfig } from "eslint-config-custom/typescript.js";
import { reactConfig } from "eslint-config-custom/react.js";

/**
 * @type import('eslint').Linter.FlatConfig[]
 */
const config = [...typescriptConfig, ...reactConfig];

export default config;
