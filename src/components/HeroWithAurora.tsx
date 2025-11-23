import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { AuroraText } from "@/components/ui/aurora-text";
// Removed AuroraText to simplify and consolidate the message hierarchy

interface HeroWithAuroraProps {
  onCTAClick: () => void;
}

export const HeroWithAurora = ({ onCTAClick }: HeroWithAuroraProps) => {
  return (
    <AuroraBackground className="bg-background">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative grid justify-items-center max-w-4xl mx-auto px-6 py-12 md:py-20 text-center gap-y-4 sm:gap-y-5 md:gap-y-6"
      >
        <div className="inline-block text-center [isolation:isolate]">
          <picture>
            <source srcSet="https://s3.magoautomacoes.com.br/desing/metodoebookpremium/MEP%20LOGO%20(1).webp" type="image/webp" />
            <img
              src="https://s3.magoautomacoes.com.br/desing/metodoebookpremium/MEP%20LOGO%20(1).png"
              alt="Método Ebook Premium"
              loading="lazy" decoding="async"
              width="640" height="160"
              className="h-20 sm:h-28 md:h-36 lg:h-40 w-auto mx-auto"
            />
          </picture>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[3.8rem] xl:text-[4.2rem] font-bold leading-[1.15] text-center text-primary tracking-tight mb-6">
            Transforme seu e‑book em um app{" "}
            <AuroraText
              colors={["hsl(var(--accent))", "hsl(var(--soft-blue))", "hsl(var(--primary))", "hsl(var(--accent))"]}
            >
              premium
            </AuroraText>{" "}
            em minutos — sem programar.
          </h1>
          <p className="text-sm sm:text-base text-foreground/90 text-center mb-8">
            PDFs são esquecidos; um app{" "}
            <AuroraText
              colors={["hsl(var(--accent))", "hsl(var(--soft-blue))", "hsl(var(--primary))", "hsl(var(--accent))"]}
            >
              premium
            </AuroraText>{" "}
            engaja, valoriza seu conteúdo e aumenta suas vendas.
          </p>
        </div>

        <div className="w-full max-w-md px-4 mt-4 md:mt-6 text-center">
          <Button onClick={onCTAClick} aria-label="Quero meu app premium agora" variant="premium" size="lg" className="w-full sm:w-auto text-base md:text-lg animate-fade-scale hover:scale-[1.03]">
            Quero meu app
            {" "}
            <AuroraText
              colors={["hsl(var(--accent))", "hsl(var(--soft-blue))", "hsl(var(--primary))", "hsl(var(--accent))"]}
            >
              premium
            </AuroraText>
            {" "}agora
          </Button>
        </div>

        <div className="text-xs md:text-sm text-foreground/80 mt-3 text-center px-4">
          Funciona com copiar e colar, mesmo se você nunca programou.
        </div>
      </motion.div>
    </AuroraBackground>
  );
};
