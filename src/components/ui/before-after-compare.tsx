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
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [pos, setPos] = React.useState(() => {
    const clamped = Math.min(Math.max(initialPosition, 0), 1);
    return clamped;
  });
  const [dragging, setDragging] = React.useState(false);

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

  return (
    <div className={clsx("w-full", className)}>
      <div
        ref={containerRef}
        className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-xl border"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerLeave}
        aria-label="Comparação antes e depois"
      >
        {/* Base (Depois) */}
        {afterIsVideo ? (
          <video
            src={afterSrc}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            {...afterVideoProps}
          />
        ) : (
          <img
            src={afterSrc}
            alt={afterAlt}
            className="absolute inset-0 w-full h-full object-cover"
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
              src={beforeSrc}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              {...beforeVideoProps}
            />
          ) : (
            <img
              src={beforeSrc}
              alt={beforeAlt}
              className="w-full h-full object-cover"
              draggable={false}
            />
          )}
        </div>

        {/* Labels */}
        <div className="absolute left-3 top-3 z-10">
          <span className="px-2 py-1 text-xs sm:text-sm rounded bg-background/80 border shadow">
            {beforeLabel}
          </span>
        </div>
        <div className="absolute right-3 top-3 z-10">
          <span className="px-2 py-1 text-xs sm:text-sm rounded bg-background/80 border shadow">
            {afterLabel}
          </span>
        </div>

        {/* Linha/Handle */}
        <div
          className="absolute inset-y-0 z-20 flex items-center"
          style={{ left: handleLeft }}
        >
          <div className="w-px h-full bg-border" />
          <button
            type="button"
            aria-label="Arrastar comparação"
            role="slider"
            tabIndex={0}
            onKeyDown={onKeyDown}
            className="-ml-3 rounded-full border bg-background shadow w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center"
          >
            <span className="block w-1.5 h-1.5 rounded-full bg-foreground/70" />
          </button>
        </div>
      </div>
    </div>
  );
};