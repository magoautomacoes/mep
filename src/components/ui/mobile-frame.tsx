"use client";
import React from "react";
import clsx from "clsx";

type MobileFrameProps = {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
};

export const MobileFrame: React.FC<MobileFrameProps> = ({ children, className, innerClassName }) => {
  return (
    <div
      className={clsx(
        "relative rounded-[2.2rem] border bg-black shadow-xl",
        "border-neutral-700/60",
        "p-3",
        className,
      )}
      aria-label="Mockup de smartphone"
    >
      {/* Notch */}
      <div
        className={
          "absolute top-1 left-1/2 -translate-x-1/2 w-24 h-3 rounded-full bg-neutral-800 border border-neutral-700"
        }
      />
      {/* Tela interna */}
      <div
        className={clsx(
          "relative w-full h-full rounded-[1.8rem] overflow-hidden",
          "bg-neutral-900",
          innerClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default MobileFrame;