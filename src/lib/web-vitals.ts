export type WebVitalsMetric = {
  name: string;
  value: number;
  id: string;
  delta?: number;
};

export function initWebVitals(report: (metric: WebVitalsMetric) => void = console.log) {
  import("web-vitals")
    .then(({ onCLS, onFID, onLCP, onINP, onTTFB }) => {
      onCLS(report);
      onFID(report);
      onLCP(report);
      onINP(report);
      onTTFB(report);
    })
    .catch(() => {
      // silenciosamente ignora se não carregar
    });
}