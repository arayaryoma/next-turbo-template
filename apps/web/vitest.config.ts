import react from "@vitejs/plugin-react";
import { defineProject } from "vitest/config";

// https://vitejs.dev/config/
export default defineProject({
  plugins: [react()],
  test: {
    globals: true,
    environment: "happy-dom",
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
  },
});
