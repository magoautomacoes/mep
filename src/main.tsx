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
