"use client";
import React from "react";
import clsx from "clsx";

type VturbLazyProps = {
  playerId: string;
  scriptSrc: string;
  className?: string; // wrapper
  style?: React.CSSProperties;
  frameClassName?: string; // inner frame (size/aspect)
};

const VturbLazy: React.FC<VturbLazyProps> = ({ playerId, scriptSrc, className, style, frameClassName }) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [initialized, setInitialized] = React.useState(false);

  React.useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((e) => e.isIntersecting);
        if (visible && !initialized) {
          const exists = Array.from(document.scripts).some((s) => s.src === scriptSrc);
          if (!exists) {
            const s = document.createElement("script");
            s.src = scriptSrc;
            s.async = true;
            document.head.appendChild(s);
          }
          setInitialized(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [scriptSrc, initialized]);

  return (
    <div ref={ref} className={className} style={style}>
      <div className={clsx("relative w-full aspect-video mx-auto", frameClassName)}>
        {/* O custom element ocupa todo o frame, garantindo proporção 16:9 */}
        <vturb-smartplayer
          id={playerId}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        ></vturb-smartplayer>
        {!initialized && (
          <div className="absolute inset-0 bg-muted/40 animate-pulse rounded" />
        )}
      </div>
    </div>
  );
};

export default VturbLazy;