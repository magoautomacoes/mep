import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initWebVitals } from "./lib/web-vitals";

createRoot(document.getElementById("root")!).render(<App />);

// Instrumentação básica de performance (Web Vitals)
initWebVitals((metric) => {
  // Exibe métricas no console; em produção, envie para seu endpoint/analytics
  console.log("[web-vitals]", metric.name, Math.round(metric.value), metric);
});

const idle = (window as any).requestIdleCallback as undefined | ((cb: () => void, opts?: { timeout?: number }) => number);
const prefetchLazy = () => {
  import("@/components/TestimonialsSection");
  import("@/components/ui/faqs");
};
if (idle) idle(prefetchLazy, { timeout: 2500 });
else setTimeout(prefetchLazy, 2500);
