// eslint-disable-next-line import/no-relative-packages -- linst-staged configuration file should not be restricted
import rootConfig from "../../lint-staged.config.mjs";

// eslint-disable-next-line import/no-default-export -- lint-staged configuration uses default export
export default {
  ...rootConfig,
  "*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}": "eslint",
};
