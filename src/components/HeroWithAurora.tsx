import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { AuroraText } from "@/components/ui/aurora-text";

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
        className="relative flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 max-w-5xl mx-auto"
      >
        <div className="mb-6 md:mb-8 inline-block text-center [isolation:isolate]">
          <img
            src="https://s3.magoautomacoes.com.br/desing/metodoebookpremium/MEP%20LOGO%20(1).png"
            alt="Método Ebook Premium"
            className="h-20 sm:h-28 md:h-36 lg:h-40 w-auto mx-auto"
          />
          <div className="text-xs sm:text-sm text-muted-foreground mt-2 tracking-widest">
            MÉTODO EBOOK PREMIUM
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-4 md:mb-6 leading-tight text-center text-foreground px-2">
          Transforme seu e‑book em um app premium em minutos — sem programar.
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-display mb-8 md:mb-10 text-secondary text-center px-2">
          PDFs são esquecidos; um <AuroraText colors={["hsl(var(--accent))", "hsl(var(--soft-blue))", "hsl(var(--primary))", "hsl(var(--accent))"]} className="bg-clip-text text-transparent">app</AuroraText> engaja, valoriza seu conteúdo e aumenta suas vendas.
        </p>

        <div className="flex flex-col items-center gap-3 w-full max-w-md px-4">
          <Button onClick={onCTAClick} aria-label="Quero meu app premium agora" variant="premium" size="lg" className="w-full sm:w-auto">
            Quero meu app premium agora
          </Button>

          <p className="text-xs sm:text-sm text-muted-foreground text-center italic">
            Funciona com copiar e colar, mesmo se você nunca programou.
          </p>
        </div>
      </motion.div>
    </AuroraBackground>
  );
};
