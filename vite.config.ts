import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  assetsInclude: ["**/*.otf"],
  plugins: [react()],
  base: "/farmstarck-frontend/",
  server: {
    port: 4000,
  },
  build: {
    outDir: "build", // Ensure the output directory is 'build'
  },
});
