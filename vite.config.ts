import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// GitHub Pages project site path: https://vuanhle.github.io/domainic/
export default defineConfig({
  plugins: [react()],
  base: "/domainic/",
  build: {
    rollupOptions: {
      input: fileURLToPath(new URL("./app.html", import.meta.url)),
    },
  },
});
