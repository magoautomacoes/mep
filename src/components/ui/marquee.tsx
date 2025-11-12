import * as React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  pauseOnHover?: boolean;
  className?: string;
  speed?: number; // seconds for full loop
}

export function Marquee({ children, pauseOnHover = true, className, speed = 30 }: MarqueeProps) {
  const trackStyle: React.CSSProperties = {
    animation: `marquee ${speed}s linear infinite`,
  };

  const hoverPauseClass = pauseOnHover ? "group-hover:[animation-play-state:paused]" : "";

  const items = React.Children.toArray(children);

  return (
    <div className={cn("group relative overflow-hidden", className)}>
      <div
        className={cn(
          "marquee-track flex items-center whitespace-nowrap will-change-transform",
          hoverPauseClass
        )}
        style={trackStyle}
      >
        {items.map((child, idx) => (
          <React.Fragment key={`m1-${idx}`}>{child}</React.Fragment>
        ))}
        {items.map((child, idx) => (
          <React.Fragment key={`m2-${idx}`}>{child}</React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Marquee;