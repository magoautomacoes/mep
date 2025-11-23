"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { Share2Icon } from "lucide-react";

const integrations = [
  { name: "Hotmart", logo: "https://s3.magoautomacoes.com.br/desing/512px-Hotmart-logo.png" },
  { name: "Eduzz", logo: "https://s3.magoautomacoes.com.br/desing/eduzz.png" },
  { name: "Cakto", logo: "https://s3.magoautomacoes.com.br/desing/logo_DhBW2uh.png" },
  { name: "Kiwify", logo: "https://s3.magoautomacoes.com.br/desing/Kiwify_logo_horizontal.svg.png" },
  { name: "Ticto", logo: "https://s3.magoautomacoes.com.br/desing/ticto.webp" },
  { name: "Lastlink", logo: "https://s3.magoautomacoes.com.br/desing/IE3ht6SQf2bZBWVcGiPA_gz5ryqqcw78ieafxfvaf-768x195-1.webp" },
];

export function IntegrationsCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl",
        "border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02]",
        "backdrop-blur-xl shadow-subtle hover:shadow-premium transition-all duration-300",
        className
      )}
    >
      <div className="p-6 md:p-8">
        <div className="flex items-center justify-center gap-2 mb-4 text-center">
          <Share2Icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
          <h3 className="text-lg md:text-xl font-semibold">Compatível com todas as plataformas</h3>
        </div>

        {/* Vitrine de logos com animação suave */}
        <Marquee pauseOnHover speed={20} className="h-16 md:h-20">
          {integrations.map((p, i) => {
            const isLastlink = p.name.toLowerCase() === "lastlink";
            return (
              <div
                key={i}
                className={cn(
                  "flex items-center justify-center",
                  "bg-white/10 rounded-xl py-2",
                  isLastlink
                    ? "px-3 mx-[2px] md:mx-[4px] min-w-[155px] h-[54px] md:h-[60px]"
                    : "px-4 mx-1 md:mx-2 min-w-[140px] h-12 md:h-14",
                  "opacity-90 transition-all duration-300 hover:opacity-100 hover:scale-105"
                )}
                title={p.name}
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  width={isLastlink ? 155 : 140}
                  height={isLastlink ? 60 : 48}
                  className={cn(
                    "object-contain",
                    isLastlink ? "max-h-[54px] md:max-h-[60px]" : "max-h-12 md:max-h-12"
                  )}
                  loading="lazy"
                  decoding="async"
                  sizes={isLastlink ? "(max-width: 768px) 120px, 155px" : "(max-width: 768px) 112px, 140px"}
                />
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
}

export default IntegrationsCard;