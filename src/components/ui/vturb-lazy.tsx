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

  // Carrega o script do player imediatamente ao montar (mais robusto que lazy por viewport)
  React.useEffect(() => {
    const alreadyLoaded = !!document.getElementById("vturb-smartplayer-js") || Array.from(document.scripts).some((s) => s.src === scriptSrc);
    if (!alreadyLoaded) {
      const s = document.createElement("script");
      s.src = scriptSrc;
      s.async = true;
      s.onload = () => setInitialized(true);
      document.head.appendChild(s);
    } else {
      setInitialized(true);
    }
  }, [scriptSrc]);

  return (
    <div ref={ref} className={className} style={style} data-testid="vturb-container">
      <div className={clsx("relative w-full aspect-[4/3] sm:aspect-video mx-auto isolate", frameClassName)}>
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