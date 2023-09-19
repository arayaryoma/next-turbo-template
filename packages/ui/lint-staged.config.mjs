import rootConfig from "../../lint-staged.config.mjs";

export default {
  ...rootConfig,
  "*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}": "eslint",
};
