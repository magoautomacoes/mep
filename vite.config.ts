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
    // Cabeçalhos de segurança no ambiente de desenvolvimento
    headers: {
      // CSP mais permissiva no dev para evitar quebras; restrinja em produção.
      "Content-Security-Policy": [
        "default-src 'self';",
        // Scripts do app, Vite (dev), VTurb e blobs
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: https://scripts.converteai.net https://*.converteai.net https:;",
        // Estilos internos e Google Fonts
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;",
        // Imagens locais/externas e blobs gerados pelo player
        "img-src 'self' data: https: blob:;",
        // Mídia (HLS/MP4) via HTTPS e blobs (URL.createObjectURL)
        "media-src 'self' https: blob:;",
        // Fontes locais e Google Fonts
        "font-src 'self' data: https://fonts.gstatic.com;",
        // Conexões (HMR ws:, APIs externas https:, Sentry, VTurb, CDN)
        "connect-src 'self' ws: https:;",
        // iFrames criados pelo player
        "frame-src 'self' https:;",
        // Web Workers e child-src para compatibilidade
        "worker-src 'self' blob: https:;",
        "child-src 'self' blob: https:;",
        // Restrição de origem base e ações de formulário
        "base-uri 'self';",
        "form-action 'self';",
        // Impede embedding desta página (não afeta frames internos)
        "frame-ancestors 'none'"
      ].join(" "),
      "X-Frame-Options": "DENY",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Permissions-Policy": "camera=(), microphone=(), geolocation=(), interest-cohort=()",
      "Cross-Origin-Opener-Policy": "same-origin",
      // Efetivo apenas via HTTPS; incluído para manter consistência
      "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
    },
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
