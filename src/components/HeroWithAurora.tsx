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
        <div className="mb-6 md:mb-8 inline-block text-center">
          <div className="text-accent text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight">
            MEP
          </div>
          <div className="text-xs sm:text-sm text-muted-foreground mt-2 tracking-widest">
            MÉTODO EBOOK PREMIUM
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-4 md:mb-6 leading-tight text-center text-foreground px-2">
          Seu ebook não vai mais<br className="hidden sm:inline" />
          <span className="sm:hidden"> </span>ser só um PDF.
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-display mb-8 md:mb-10 text-secondary text-center px-2">
          Crie um <AuroraText colors={["hsl(var(--accent))", "hsl(var(--soft-blue))", "hsl(var(--primary))", "hsl(var(--accent))"]} className="bg-clip-text text-transparent">app premium</AuroraText> em minutos, sem programação.
        </p>

        <div className="flex flex-col items-center gap-3 w-full max-w-md px-4">
          <Button onClick={onCTAClick} aria-label="Transformar meu e-book agora" variant="premium" size="lg" className="w-full sm:w-auto">
            Transformar meu e-book agora
          </Button>

          <p className="text-xs sm:text-sm text-muted-foreground text-center">
            Mesmo se você não souber programar, basta copiar e colar.
          </p>
        </div>
      </motion.div>
    </AuroraBackground>
  );
};
