import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    chunkSizeWarningLimit: 1000,
  },
});
