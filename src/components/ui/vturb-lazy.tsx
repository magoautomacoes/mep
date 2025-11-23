"use client";
import React from "react";
import clsx from "clsx";

type VturbLazyProps = {
  playerId: string;
  scriptSrc: string;
  className?: string; // wrapper
  style?: React.CSSProperties;
  frameClassName?: string; // inner frame (size/aspect)
  posterSrc?: string; // optional poster while initializing
};

const VturbLazy: React.FC<VturbLazyProps> = ({ playerId, scriptSrc, className, style, frameClassName, posterSrc }) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [initialized, setInitialized] = React.useState(false);

  React.useEffect(() => {
    let loaded = false;
    const load = () => {
      if (loaded) return;
      loaded = true;
      const libLoaded = !!document.getElementById("vturb-smartplayer-js");
      const playerLoaded = Array.from(document.scripts).some((s) => s.src === scriptSrc);
      if (libLoaded || playerLoaded) {
        setInitialized(true);
        return;
      }
      const s = document.createElement("script");
      s.src = scriptSrc;
      s.async = true;
      s.onload = () => setInitialized(true);
      document.head.appendChild(s);
    };

    const el = ref.current;
    let io: IntersectionObserver | null = null;
    if (el && "IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            load();
            io && io.disconnect();
          }
        },
        { rootMargin: "150px" }
      );
      io.observe(el);
    } else {
      const idle = (window as any).requestIdleCallback as undefined | ((cb: () => void, opts?: { timeout?: number }) => number);
      if (idle) idle(load, { timeout: 5000 });
      else setTimeout(load, 3000);
    }

    return () => {
      io && io.disconnect();
    };
  }, [scriptSrc]);

  return (
    <div ref={ref} className={className} style={style} data-testid="vturb-container">
      <div className={clsx("relative w-full aspect-video mx-auto", frameClassName)}>
        {/* O custom element ocupa todo o frame, garantindo proporção 16:9 */}
        <vturb-smartplayer
          id={playerId}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 10 }}
          data-testid="vturb-element"
        ></vturb-smartplayer>
        {!initialized && (
          posterSrc ? (
            <img
              src={posterSrc}
              alt="Pré-visualização do vídeo"
              className="absolute inset-0 w-full h-full object-cover rounded pointer-events-none z-0"
              loading="lazy"
              decoding="async"
              data-testid="vturb-poster"
            />
          ) : (
            <div className="absolute inset-0 bg-muted/40 animate-pulse rounded pointer-events-none z-0" data-testid="vturb-poster" aria-live="polite" />
          )
        )}
      </div>
    </div>
  );
};

export default VturbLazy;