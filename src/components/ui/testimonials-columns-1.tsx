"use client";
import React from "react";
import { motion } from "motion/react";
import { AuroraText } from "@/components/ui/aurora-text";

export type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  const renderWithPremiumHighlight = (text: string) => {
    const parts = text.split(/(premium)/gi);
    return (
      <>
        {parts.map((part, idx) => {
          if (part.toLowerCase() === "premium") {
            return (
              <AuroraText
                key={idx}
                colors={["hsl(var(--accent))", "hsl(var(--soft-blue))", "hsl(var(--primary))", "hsl(var(--accent))"]}
              >
                premium
              </AuroraText>
            );
          }
          return <React.Fragment key={idx}>{part}</React.Fragment>;
        })}
      </>
    );
  };
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-10 rounded-3xl border border-border/60 bg-card/50 backdrop-blur-sm shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-shadow max-w-xs w-full"
                  key={i}
                >
                  <div>{renderWithPremiumHighlight(text)}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                      loading="lazy" decoding="async"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">{name}</div>
                      <div className="leading-5 opacity-60 tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};