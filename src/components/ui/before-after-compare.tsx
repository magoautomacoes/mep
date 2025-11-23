"use client";
import React from "react";
import clsx from "clsx";

type BeforeAfterCompareProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
  initialPosition?: number; // 0..1
  className?: string;
  beforeIsVideo?: boolean;
  afterIsVideo?: boolean;
  beforeVideoProps?: React.VideoHTMLAttributes<HTMLVideoElement>;
  afterVideoProps?: React.VideoHTMLAttributes<HTMLVideoElement>;
  containerClassName?: string;
};

export const BeforeAfterCompare: React.FC<BeforeAfterCompareProps> = ({
  beforeSrc,
  afterSrc,
  beforeAlt = "Antes",
  afterAlt = "Depois",
  beforeLabel = "Antes",
  afterLabel = "Depois",
  initialPosition = 0.5,
  className,
  beforeIsVideo = false,
  afterIsVideo = false,
  beforeVideoProps,
  afterVideoProps,
  containerClassName,
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const beforeVideoRef = React.useRef<HTMLVideoElement | null>(null);
  const afterVideoRef = React.useRef<HTMLVideoElement | null>(null);
  const [pos, setPos] = React.useState(() => {
    const clamped = Math.min(Math.max(initialPosition, 0), 1);
    return clamped;
  });
  const [dragging, setDragging] = React.useState(false);
  const [activated, setActivated] = React.useState(false);

  const updatePos = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setPos(x / rect.width);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    setDragging(true);
    updatePos(e.clientX);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    updatePos(e.clientX);
  };
  const onPointerUp = () => setDragging(false);
  const onPointerLeave = () => setDragging(false);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const step = 0.05;
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - step));
    if (e.key === "ArrowRight") setPos((p) => Math.min(1, p + step));
  };

  const handleLeft = `${Math.round(pos * 100)}%`;

  React.useEffect(() => {
    const el = containerRef.current;
    let io: IntersectionObserver | null = null;
    const activate = () => {
      if (activated) return;
      setActivated(true);
      const a = afterVideoRef.current;
      const b = beforeVideoRef.current;
      a && a.play().catch(() => {});
      b && b.play().catch(() => {});
    };
    if (el && "IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            activate();
            io && io.disconnect();
          }
        },
        { rootMargin: "300px" }
      );
      io.observe(el);
    } else {
      setTimeout(activate, 2000);
    }
    return () => {
      io && io.disconnect();
    };
  }, [activated]);

  return (
    <div className={clsx("w-full", className)}>
      <div
        ref={containerRef}
        className={clsx(
          "relative w-full overflow-hidden rounded-xl border mx-auto",
          containerClassName || "h-64 sm:h-80 md:h-96",
        )}
        style={{ touchAction: "none" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerLeave}
        aria-label="Comparação antes e depois"
      >
        {/* Base (Depois) */}
        {afterIsVideo ? (
          <video
            ref={afterVideoRef}
            src={afterSrc}
            className="absolute inset-0 w-full h-full object-cover object-center"
            preload={activated ? "metadata" : "none"}
            loop
            muted
            playsInline
            {...afterVideoProps}
          />
        ) : (
          <img
            src={afterSrc}
            alt={afterAlt}
            className="absolute inset-0 w-full h-full object-cover object-center"
            draggable={false}
          />
        )}

        {/* Overlay (Antes) com largura controlada */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: handleLeft }}
        >
          {beforeIsVideo ? (
            <video
              ref={beforeVideoRef}
              src={beforeSrc}
              className="w-full h-full object-cover object-center"
              preload={activated ? "metadata" : "none"}
              loop
              muted
              playsInline
              {...beforeVideoProps}
            />
          ) : (
            <img
              src={beforeSrc}
              alt={beforeAlt}
              className="w-full h-full object-cover object-center"
              draggable={false}
            />
          )}
        </div>

        {/* Labels */}
        <div className="absolute left-3 top-3 z-10">
          <span id="before-label" className="px-2 py-1 text-xs sm:text-sm rounded bg-background/80 border shadow">
            {beforeLabel}
          </span>
        </div>
        <div className="absolute right-3 top-3 z-10">
          <span id="after-label" className="px-2 py-1 text-xs sm:text-sm rounded bg-background/80 border shadow">
            {afterLabel}
          </span>
        </div>

        {/* Linha/Handle */}
        <div
          className="absolute inset-y-0 z-20 flex items-center group"
          style={{ left: handleLeft }}
        >
          <div className="w-px h-full bg-border group-hover:bg-accent transition-colors" />
          <button
            type="button"
            aria-label="Arrastar comparação"
            role="slider"
            aria-orientation="horizontal"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(pos * 100)}
            aria-describedby="before-label after-label"
            tabIndex={0}
            onKeyDown={onKeyDown}
            className="-ml-3 rounded-full border bg-background/80 backdrop-blur-sm shadow w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center ring-0 focus-visible:ring-2 focus-visible:ring-accent group-hover:ring-2 group-hover:ring-accent transition-all"
          >
            <span className="block w-1.5 h-1.5 rounded-full bg-foreground/70" />
          </button>
        </div>
      </div>
    </div>
  );
};