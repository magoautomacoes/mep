import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/aurora-background";

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
        className="relative flex flex-col gap-4 items-center justify-center px-6"
      >
        <div className="mb-4 inline-block">
          <div className="text-accent text-5xl md:text-6xl font-display font-bold tracking-tight">
            MEP
          </div>
          <div className="text-xs md:text-sm text-muted-foreground mt-1 tracking-widest">
            MÉTODO EBOOK PREMIUM
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight text-center text-foreground">
          Seu ebook não vai mais<br />ser só um PDF.
        </h1>

        <p className="text-xl md:text-2xl lg:text-3xl font-display mb-4 text-secondary text-center">
          Torne-se premium entregando um app.
        </p>

        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-center">
          Transforme seu ebook em um aplicativo moderno, com visual profissional e experiência de leitura premium.
        </p>

        <div>
          <Button onClick={onCTAClick} className="btn-primary mb-4">
            Quero criar meu Ebook Premium
          </Button>

          <p className="text-sm text-muted-foreground text-center">
            Não precisa programar. Método Copy & Paste.
          </p>
        </div>
      </motion.div>
    </AuroraBackground>
  );
};
