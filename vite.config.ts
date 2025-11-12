import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import compression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          lucide: ["lucide-react"],
        },
      },
    },
  },
  plugins: [
    react(),
    // Gzip e Brotli para produção
    compression({ algorithm: "gzip", ext: ".gz", deleteOriginFile: false, threshold: 10240 }),
    compression({ algorithm: "brotliCompress", ext: ".br", deleteOriginFile: false, threshold: 10240 }),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
