import { typescriptConfig } from "eslint-config-custom/typescript.js";
import { nextConfig } from "eslint-config-custom/next.js";
import { reactConfig } from "eslint-config-custom/react.js";

/**
 * @type import('eslint').Linter.FlatConfig[]
 */
const config = [...typescriptConfig, ...reactConfig, ...nextConfig];

export default config;
