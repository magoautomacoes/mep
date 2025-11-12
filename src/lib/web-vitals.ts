export type WebVitalsMetric = {
  name: string;
  value: number;
  id: string;
  delta?: number;
};

export function initWebVitals(report: (metric: WebVitalsMetric) => void = console.log) {
  const endpoint = (import.meta as any).env?.VITE_VITALS_ENDPOINT as string | undefined;
  const send = (metric: WebVitalsMetric) => {
    try {
      report(metric);
      if (endpoint && typeof navigator?.sendBeacon === "function") {
        const payload = {
          name: metric.name,
          value: metric.value,
          id: metric.id,
          delta: metric.delta ?? 0,
          url: location.href,
          ts: Date.now(),
        };
        const blob = new Blob([JSON.stringify(payload)], { type: "application/json" });
        navigator.sendBeacon(endpoint, blob);
      }
    } catch {
      // ignora erros de envio
    }
  };

  import("web-vitals")
    .then(({ onCLS, onFID, onLCP, onINP, onTTFB }) => {
      onCLS(send);
      onFID(send);
      onLCP(send);
      onINP(send);
      onTTFB(send);
    })
    .catch(() => {
      // silenciosamente ignora se não carregar
    });
}