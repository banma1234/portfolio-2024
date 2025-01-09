import { defineConfig } from "vite";
import glsl from "vite-plugin-glsl";

export default defineConfig({
  root: "src",
  base: "/portfolio-2024",
  plugins: [glsl()],
  assetsInclude: ["**/*.glb"],
  build: {
    outDir: "../dist",
    chunkSizeWarningLimit: 1000,
  },
});
