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
        className="relative grid justify-items-center px-4 sm:px-6 md:px-8 py-12 sm:py-14 md:py-16 max-w-5xl mx-auto gap-y-4 sm:gap-y-5 md:gap-y-6"
      >
        <div className="inline-block text-center [isolation:isolate]">
          <img
            src="https://s3.magoautomacoes.com.br/desing/metodoebookpremium/MEP%20LOGO%20(1).png"
            alt="Método Ebook Premium"
            className="h-20 sm:h-28 md:h-36 lg:h-40 w-auto mx-auto"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-2 sm:mb-3 md:mb-4 leading-tight text-center text-foreground px-2">
          Transforme seu e‑book em um app
          {" "}
          <AuroraText
            colors={["hsl(var(--accent))", "hsl(var(--soft-blue))", "hsl(var(--primary))", "hsl(var(--accent))"]}
          >
            premium
          </AuroraText>
          {" "}em minutos — sem programar.
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center px-2 mb-6 md:mb-8">
          PDFs são esquecidos; um app
          {" "}
          <AuroraText
            colors={["hsl(var(--accent))", "hsl(var(--soft-blue))", "hsl(var(--primary))", "hsl(var(--accent))"]}
          >
            premium
          </AuroraText>
          {" "}engaja, valoriza seu conteúdo e aumenta suas vendas.
        </p>

        <div className="w-full max-w-md px-4">
          <Button onClick={onCTAClick} aria-label="Quero meu app premium agora" variant="premium" size="lg" className="w-full sm:w-auto text-base md:text-lg">
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

        <div className="text-xs md:text-sm text-muted-foreground mt-3 text-center px-4">
          Funciona com copiar e colar, mesmo se você nunca programou.
        </div>
      </motion.div>
    </AuroraBackground>
  );
};
