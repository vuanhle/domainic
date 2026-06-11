import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages project site path: https://vuanhle.github.io/domainic/
export default defineConfig({
  plugins: [react()],
  base: "/domainic/",
});
