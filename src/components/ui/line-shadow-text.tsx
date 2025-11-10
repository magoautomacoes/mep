import React from "react"
import { cn } from "@/lib/utils"

interface LineShadowTextProps extends React.HTMLAttributes<HTMLElement> {
  shadowColor?: string
  as?: React.ElementType
}

export function LineShadowText({
  children,
  shadowColor = "hsl(var(--accent))",
  className,
  as: Component = "span",
  ...props
}: LineShadowTextProps) {
  const content = typeof children === "string" ? children : String(children)
  return (
    <Component
      style={{ "--shadow-color": shadowColor } as React.CSSProperties}
      className={cn("line-shadow-text", className)}
      data-text={content}
      {...props}
    >
      {content}
    </Component>
  )
}